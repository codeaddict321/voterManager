
const methods = {
    user:["GET"],
    admin:['GET','POST','PUT','DELETE'],
    superadmin:['GET','POST','PUT','DELETE']

}
const votesModel = require('../models/votesModel')
// authMiddleware.js
function setAuthorization(method) {
    
    return async (req, res, next) => {
       
       
        const {role} = req.user;
      
        try{
            const allowedMethods = methods[role]
          
            console.log(allowedMethods.includes(method));
            console.log(allowedMethods.includes(method))
            if(allowedMethods.includes(method)){
               
                next()
            } else{
                res.status(402).json({'msg':"not authorized"})
            }
        } catch(err){
            console.log(err);
        }
       

      
    };
}

module.exports = setAuthorization;
