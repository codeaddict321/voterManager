const express = require('express')
const router = express.Router()
const  votesData = require('../models/votesModel')
require('dotenv').config();
const verifyJWT = require('../middleware/verifyJWT')
//const setAuthorization  = require('../middleware/setAuthorization')
const superadmin = require('../middleware/superAdmin')

router.get('/',verifyJWT,superadmin, async(req,res)=>{
    // rest of the object is query of filters to search based on consituency
    
   

   res.json({"data":"super data"})

})




module.exports = router
