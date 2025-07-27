const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const {listingSchema,reviewSchema}=require("../schema.js");
const Listing=require("../models/listing.js");
const {isLoggedIn, isOwner}=require("../middleware.js");
const listingsController=require("../controllers/listing.js");
const multer  = require('multer');
const {storage}=require("../CloudianryConfig.js");
const upload = multer({ storage });

const validateListing=(req,res,next)=>{
  let {error}=listingSchema.validate(req.body);
  if(error){
    const errMsg=error.details.map((el)=>el.message).join(",");
    throw new ExpressError(400,errMsg);
  }
  else{
    next();
  }
}

router.route("/")
.get(wrapAsync(listingsController.index))
// .post(isLoggedIn,validateListing,wrapAsync(listingsController.createNewForm));
.post(
  isLoggedIn,
  upload.single("listing[image][url]"),
  validateListing,
  wrapAsync(listingsController.createListing)
    // used for upload the iamge directly
  // console.log("File:", req.file);
  // console.log("Body:", req.body);
  // res.send(req.file);
);

// New Route
router.get("/new",listingsController.renderNewForm);

router.route("/:id")
.get(wrapAsync(listingsController.showForm))
.put(isLoggedIn,isOwner,
  upload.single("listing[image][url]"),
  validateListing,wrapAsync(listingsController.updateRoute))
.delete(isLoggedIn,isOwner,listingsController.destroyRoute);

// Updated Route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingsController.renderEditForm));

// //  For Listings
// // Index Route
// router.get("/",wrapAsync(listingsController.index));

// // New Route
// router.get("/new",listingsController.renderNewForm);

// Show Route
// router.get("/:id",wrapAsync(listingsController.showForm));

// // new form
// router.post("/",isLoggedIn,validateListing,wrapAsync(listingsController.createNewForm));

// // Edit Route
// router.get("/:id/edit",isLoggedIn,isOwner,listingsController.EditForm);

// // Updated Route
// router.put("/:id",isLoggedIn,isOwner,validateListing,wrapAsync(listingsController.updateRoute));

// // Delete Route
// router.delete("/:id",isLoggedIn,isOwner,listingsController.destroyRoute);

module.exports=router;
