const express=require("express");
const router=express.Router();
const User=require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport=require("passport");
const {saveRedirectUrl}=require("../middleware.js");

router.get("/signup",(req,res)=>{
    res.render("user/signup.ejs");
});

router.post("/signup",wrapAsync(async(req,res)=>{
    try{
        let {username,email,password}=req.body;
        const newUser=new User({email,username});
        const registereduser=await User.register(newUser,password);
        console.log(registereduser);
        req.login(registereduser,(err)=>{
            if(err){
                return next(err);
            }
            req.flash("success","Welcome to Wanderlust");
            res.redirect("/listings");
        });
    }catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }
    
}));

router.get("/login",(req,res)=>{
    res.render("user/login.ejs");
});

router.post("/login",saveRedirectUrl,passport.authenticate("local",{failureRedirect:'/login',failureFlash: true}),async(req,res)=>{
    req.flash("success","Logged in successfully");
    if(res.locals.redirectUrl){
        return res.redirect(res.locals.redirectUrl);
    }
    res.redirect("/listings");
});

router.get("/logout",(req,res,next)=>{
    req.logout((error)=>{
        if(error){
            return next(error);
        }
        req.flash("success","logged out successfully");
        res.redirect("/listings");
    })
});

module.exports=router;