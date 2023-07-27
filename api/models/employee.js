const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeesSchema = Schema({
    id:Number,
    img:String,
    name:String,
    city:String,
    education:String,
    salary:String,
})

module.exports = mongoose.model('Employee',employeesSchema)