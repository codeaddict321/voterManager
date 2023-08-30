
const methods = {
    user:["GET"],
    admin:['GET','POST','PUT','DELETE'],
    superadmin:['GET','POST','PUT','DELETE']

}
const votesModel = require('../models/votesModel')
// authMiddleware.js
function superAdminRoute(req,res,next) {
    
  
       
        const {role} = req.user;
      
        try{
          if(role === "superadmin"){

                  next()
            } else{
                res.status(402).json({'msg':"not authorized"})
            }
        } catch(err){
            console.log(err);
        }
       

      
    };


module.exports = superAdminRoute
