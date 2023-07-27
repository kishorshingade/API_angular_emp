const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const employeeRouter = require('./api/routes/employee')
const usersRouters = require('./api/routes/users')
const cors = require('cors')

//connection to MongoDB
const connectionString = 'mongodb://127.0.0.1:27017/employees'

mongoose.connect(connectionString)
.then(()=>{
    console.log('Connection Established Successfully')
})
.catch(()=>{
    console.log('Error While Connecting')
})

// middelewears 
app.use(express.json())
app.use(cors({
    origin: ' http://localhost:5006'
}))

app.use(morgan("dev"))


app.use('/employee',employeeRouter)
app.use('/users',usersRouters)

module.exports = app