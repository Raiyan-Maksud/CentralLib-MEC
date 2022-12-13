const express = require('express')
const bodyParser = require('body-parser')
const env = require('dotenv')
const app =  express()
const connectDatabase = require('./src/database/connect')
const adminRouter = require('./src/routes/adminRoute')
const studentRouter = require('./src/routes/studentsRoute')
env.config()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
connectDatabase()
app.use('/admin',adminRouter)
console.log(process.env.MONGO_URL)
app.listen(process.env.PORT, ()=>{
    console.log(`App is listening on port ${process.env.PORT}`)
})