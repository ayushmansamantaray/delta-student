const express=require("express");
const router=express.Router();
const User=require("../models/users.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userControllers=require("../controllers/user.js");

// router.get("/signup",userControllers.createSignupForm);
// router.post("/signup",userControllers.renderSignUp);

router.route("/signup")
.get(userControllers.createSignupForm)
.post(userControllers.renderSignUp);

router.route("/login")
.get(userControllers.loginForm)
.post(saveRedirectUrl,passport.authenticate("local",{ failureRedirect: "/login", failureFlash:true}),
userControllers.renderLoginForm)

// router.get("/login",userControllers.loginForm);
// router.post("/login",saveRedirectUrl,passport.authenticate("local",{ failureRedirect: "/login", failureFlash:true}),
// userControllers.renderLoginForm);

router.get("/logout",userControllers.logoutForm);

module.exports=router;