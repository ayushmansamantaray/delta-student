const mongoose=require("mongoose");
// const {listingSchema}=require("./schema.js");
const Review=require("./review.js");

const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required:true,
  },
  description: {
    type: String,
    // required:true,
  },
  price: {
    type: Number,
    // required: true,
  },
  image: {
    url: {
      type: String,
      // default: "https://plus.unsplash.com/premium_photo-1751906599163-37a232698636?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    filename: String,
  },
  location: {
    type: String,
    // required: true,
  },
  country: {
    type: String,
    // required:true,
  },
  reviews:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Review",
   }],
  owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
   }
});

listingSchema.post("findOneAndDelete",async(listing)=>{
  if(listing){
    await Review.deleteMany({_id:{$in:listing.reviews}});
  }
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports=Listing;