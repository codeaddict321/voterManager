const express = require('express')
const router = express.Router()
const User  =require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config();

router.post('/register',async(req,res)=>{
       const {username,password} =req.body;
       const isUser = await User.findOne({username})
      
       if(isUser) return res.status(401).json({"error":"username already exist"})
       try{
        const hashedPwd = await bcrypt.hash(password,10)
     await  User.create({username,password:hashedPwd})
    res.json({"msg":"success"})
       } catch(err){
        console.log(err);
       }

})

router.post('/login',async(req,res)=>{
    const {username,password} =req.body;
    const isUser = await User.findOne({username})
 
    if(!isUser) return res.status(401).json({"error":"username or passowrd is not correct"})
    const isPwd = await bcrypt.compare(password,isUser['password'])
    if(!isPwd) return res.status(401).json({"error":"username or passowrd is not correct"})
    try{
       
    const token = await jwt.sign({role:isUser["role"]},process.env.ACCESS_SECRET_TOKEN,{expiresIn:'1d'})
    res.json({token,msg:"success"})
    } catch(err){
     console.log(err);
    }

})


module.exports = router
