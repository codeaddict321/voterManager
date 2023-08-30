const jwt = require('jsonwebtoken')
require('dotenv').config();
const User = require('../models/userModel')
async function verifyJWT(req,res,next) {
   let token;
   if(req.query.token){
  token = req.query.token
   } else{
     const authHeader =req.headers.authorization;
     if(!authHeader) return res.status(402).json({'msg':"auth header missing"})
     token = authHeader.split(' ')[1]
   }
  
  console.log(token);

  if(!token) return res.status(402).json({'msg':"login to move forward"})
   try{
    const decoded = await jwt.verify(token,process.env.ACCESS_SECRET_TOKEN)
   if(!decoded) return res.status(402)
   req.user = decoded
   next()

    
   } catch(err){
    console.log(err);
   }

  
  
}
module.exports = verifyJWT