const express = require('express')
const router = express.Router()
const  votesData = require('../models/votesModel')
require('dotenv').config();
const verifyJWT = require('../middleware/verifyJWT')
const setAuthorization  = require('../middleware/setAuthorization')


router.get('/',verifyJWT, async(req,res)=>{
    // rest of the object is query of filters to search based on consituency
    const { token, ...restOfObject } = req.query;
   const {role} = req.user;
    const data = await votesData.find({})
   

   res.json({data,userRole:role})

})


router.put('/addvoteinfo',verifyJWT,setAuthorization('PUT'),async (req,res)=>{
    const data = req.body;
    console.log(data);
 
    try{
      const newData = await votesData.create({...data})
      if(newData){
        res.json({'msg':"success"})
      }
      
    } catch(err){
        console.log(err);
        res.json({'msg':err})
    }
  

})
router.put('/deletevoteinfo',verifyJWT,setAuthorization('PUT'),async (req,res)=>{
    const {id} = req.body;
    
 
    try{
        const deletedDoc = await votesData.findByIdAndDelete(id);
     if(deletedDoc){
        console.log(deletedDoc);
        res.json({'msg':'deleted'})
     }
      
    } catch(err){
        console.log(err);
        res.json({'msg':err})
    }
  

})

module.exports = router
