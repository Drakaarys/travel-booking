const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const {listingSchema,reviewSchema}=require("../schema.js");
const Review=require("../models/review.js");
const Listing=require("../models/listing.js");
const {isLoggedIn,isReviewAuthor}=require("../middleware.js");

const validateReview=(req,res,next)=>{
    let {error}=reviewSchema.validate(req.body);
    if(error){
        let errmsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errmsg);
    }else{
        next();
    } 
}

//Reviews
router.post("/",isLoggedIn,validateReview,wrapAsync(async(req,res)=>{
    // let {id}=req.params.id;
    let listing=await Listing.findById(req.params.id);
    let newReview= new Review(req.body.review);
    newReview.author=req.user._id;
    listing.reviews.push(newReview); 
    // console.log(newReview);

    await newReview.save();
    await listing.save();

    console.log("review saved");
    req.flash("success","New review created successfully");
    // res.send("Review saved");
    res.redirect(`/listings/${listing._id}`);
}));

//delete review
router.delete("/:reviewId",isReviewAuthor,wrapAsync(async(req,res)=>{
    let {id,reviewId}=req.params;

    await Listing.findByIdAndUpdate(id, {$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);

    req.flash("success","Review deleted");
    res.redirect(`/listings/${id}`);
}));

module.exports=router;
