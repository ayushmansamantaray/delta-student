const Listing=require("./models/listing.js");
const Review=require("./models/review.js");

module.exports.isLoggedIn=(req,res,next)=>{
    // console.log(req.path,"..",req.originalUrl);
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("error","user not logged in");
         return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl= (req,res,next) => {  // we have to save the url in locals bcoz if we dont save that it set to undefined
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner=async (req,res,next)=>{
    let { id } = req.params;
    let listing=await Listing.findById(id);
    if(!listing.owner._id.equals(req.user._id)){
        req.flash("error","you have't the owner of listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.isReviewdeleteAuthor=async (req,res,next)=>{
    let { id,reviewId } = req.params;
    let review=await Review.findById(reviewId);
    if(!review.author.equals(req.user._id)){
        req.flash("error","you have't the owner of the review to delete it ");
        return res.redirect(`/listings/${id}`);
    }
    next();
}