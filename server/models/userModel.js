const mongoose = require('mongoose')
const {Schema} = mongoose;
const {model} = mongoose;

const userSchema  = new Schema({
   username:String,
   password:String,
   role: {
    type: String,
    default: "user"
}

})
const user =  model('user',userSchema)
module.exports =user


