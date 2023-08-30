const express = require('express')
const app =express()
const PORT = process.env.PORT||3000
const cors = require('cors')
const connectDB = require('./connectDB/connect')
const xlsx = require('xlsx')
const authRoute = require('./Routes/authRoute')
const mainRoute =  require('./Routes/mainRoute')
require('dotenv').config();
const votesModel = require('./models/votesModel')
const superAdminRoute = require('./Routes/superAdminRoute')
app.use(cors())
app.use(express.json())

app.use('/',mainRoute)
app.use('/superadmin',superAdminRoute)
app.use('/auth',authRoute)





async function startServer() {
    try{
     const isTrue = await connectDB()
    
 
     if(isTrue){
      app.listen(PORT,()=>{
        console.log('server running');
       
    })
     }
      
      
    } catch(err){
      console.log(err);
    }
  }
  
  startServer()