const Listing=require("../models/listing.js");

module.exports.index= async (req, res) => {
  const allListing = await Listing.find({});
  res.render("lists.ejs", { allListing });
};

module.exports.renderNewForm=(req,res)=>{
    res.render("newform.ejs");
};

module.exports.showForm=async (req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id).populate({path:"reviews",populate:{path:"author"},}).populate("owner");
    // console.log("RENDERING LISTING PAGE:", listings);
    if(!listing){
      req.flash("error","Listing doesnot exists now");
      res.redirect("/listings");
    }
    res.render("alllist.ejs",{listing,currUser:req.user,mapToken: process.env.MAP_TOKEN });
    // console.log(listings);
};

module.exports.createListing = async (req, res) => {
  console.log("req.body:", req.body);
  console.log("req.file:", req.file);
  const newListing = new Listing(req.body.listing);
  //  If an image was uploaded via multer+cloudinary, assign it
  if (req.file) {
    let url=req.file.path;
    let filename=req.file.filename;
    newListing.image={url,filename};
  }
  newListing.owner = req.user._id;
  await newListing.save();
  req.flash("success", "New listing created!");
  res.redirect("/listings");
};

module.exports.renderEditForm=async (req,res)=>{
    let {id}=req.params;
    let listings=await Listing.findById(id);
    if(!listings){
      req.flash("error","Listing doesnot exists now");
      return res.redirect("/listings");
    }
    let originalImageUrl=listings.image.url;
    originalImageUrl=originalImageUrl.replace("/upload","/upload/w_250");
    res.render("editform.ejs",{listings,originalImageUrl});
};

module.exports.updateRoute=async (req, res) => {
    let {id}=req.params;
    const {description}=req.body;
    const updatedListing = await Listing.findByIdAndUpdate(id, req.body.listing,{description}, { new: true });
    // console.log("UPDATED listing:", updatedListing);
    if(req.file){
      let url=req.file.path;
      let filename=req.file.filename;
      updatedListing.image={url,filename};
      await updatedListing.save();
    }
    req.flash("success","listing updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyRoute=async (req,res)=>{
    let {id}=req.params;
    const deleted_id=await Listing.findByIdAndDelete(id);
    console.log(deleted_id);
    req.flash("success","Listing is deleted!");
    res.redirect("/listings");
    // res.status(200).send("Listing created successfully");
};