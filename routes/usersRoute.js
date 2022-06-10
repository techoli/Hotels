const { Route } = require("express");
const express = require("express");
const router = express.Router();
const Userss = require('../models/users');

router.post("/register",async(req,res)=>{
    const newuser =  new Userss({name:req.body.name, email:req.body.email, password: req.body.password})
    //const newuser =  new Userss(req.body.result)
    try {
        const user =await newuser.save();
        res.send("Registered Successfully")
    } catch (error) {
        return res.status(400).json({error })
    }

});
router.post("/login",async(req,res)=>{
    //const newuser = new User({name:req.body.name, email:req.body.email, password: req.body.passord})
    const {email,password} = req.body;
    try {
        const user = await Userss.findOne({email:email, password:password});
        if(user){
            const nopassd = {
                name: user.name,
                isAdmin: user.isAdmin,
                email: user.email
            }
            res.send(nopassd)
        }else{
            return res.status(400).json({message: "login failed" })
        }
        res.send(" ")
    } catch (error) {
        return res.status(400).json({error })
    }

});
module.exports = router;
