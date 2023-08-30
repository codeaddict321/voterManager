const mongoose = require('mongoose')

async function connectDB() {
    try{
        await mongoose.connect('mongodb+srv://technicalboyrishad:rishad@cluster0.vb1w39i.mongodb.net/voter')
        console.log('connected');
        return true
     
    } catch(err){
        console.log(err)
    }
}
module.exports = connectDB