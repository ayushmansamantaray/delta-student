const User=require("../models/users.js");

module.exports.createSignupForm=(req,res)=>{  // for created the signup the forms
    res.render("users/signup.ejs");
}

module.exports.renderSignUp=async(req,res)=>{
    try{
        let {username,email,password}=req.body;
        let newUser=new User({username,email});
        let newRegisteruser=await User.register(newUser,password);
        console.log(newRegisteruser);
        req.login(newRegisteruser,(err)=>{
            if(err){
                next(err);
            }
            req.flash("success","new user created")
            res.redirect("/listings");   
        });
    }
    catch(err){
     req.flash("error",err.message);
     res.redirect("/signup");
    }
};

module.exports.loginForm=(req,res)=>{
    res.render("users/login.ejs");
};

module.exports.renderLoginForm=async (req,res)=>{  // used for authentication for middleware.  local is strategy,failureRedirect is to automatic  login and if msg is fail it shows a flash msg
    req.flash("success","welcome to wanderlust.you are logged in");
    let redirectUrl=res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.logoutForm=(req,res,next)=>{
    req.logout((err)=>{  // it is a method of passport
        if(err){
        next(err);
    }
    req.flash("success","You are logged out successfully");
    res.redirect("/listings");
    });
};