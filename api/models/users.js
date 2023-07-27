const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usersSchema = Schema({
   userId:String,
   password:String
})

module.exports = mongoose.model('Users',usersSchema)