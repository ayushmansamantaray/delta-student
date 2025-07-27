if(process.env.NODE_ENV !="production"){
    require('dotenv').config();
}

console.log("Cloudinary config:", process.env.CLOUD_NAME); 

const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const methodOverride=require("method-override");
const ejsMate= require("ejs-mate");
const Review=require("./models/review.js");
const session=require("express-session");
const flash=require("connect-flash");
const passport=require("passport");
const localStrategy=require("passport-local");
const User=require("./models/users.js");
const ExpressError = require("./utils/ExpressError");
const listingRouter=require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter=require("./routes/user.js");

// const Mongo_url="mongodb://127.0.0.1:27017/wanderlust";
const dbUrl=process.env.ATLAS_DB_URL;

main().then((res)=>{
    console.log("server is working");
})
.catch((err)=>{
    console.log(err);
});

async function main() {
    // await mongoose.connect(Monoo_url);
    await mongoose.connect(dbUrl);
}

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"/public")));


const sessionOptions={
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now()+7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true,
    }
};

// app.get("/",(req,res)=>{
//     res.send("Hi,I'm root dir");
// });

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success=req.flash("success"); // The flash is saved in response locals
    res.locals.error = req.flash("error");
    res.locals.currUser=req.user; // it means currUser stores the user related info.
    next();
});

app.get("/newuser",async(req,res)=>{ // for passport new user is created
   let fakeUser=new User({
    email:"ayushman@gmail.com",
    username:"ayushman",
   });
   let newUser=await User.register(fakeUser,"Ayush1234");  // used to store fakeUser info
   res.send(newUser);
});

app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);

app.all("*",(req,res,next)=>{
  next(new ExpressError(404,"page not found"));
});

// Handling Error
app.use((err,req,res,next)=>{
  let {status=500,message="something went wrong"}=err;
//   res.status(status).send(message);
  res.status(status).render("error.ejs",{message,err});
});

app.listen(8080,()=>{
    console.log("app is listening");
});
