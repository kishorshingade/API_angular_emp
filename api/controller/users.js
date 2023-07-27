const mongoose = require('mongoose')
const Users = require('../models/users')


// GET ALL Users
exports.getUsers = async (req,res)=>{
    try{
  const data = await Users.find({})
   res.status(200).send(data)
    }catch(err){
        res.status(404).send(err)
    }
}

// // GET User By ID

exports.getUserId  = async(req,res) =>{
    try{
        const id = req.params.usersId
        const data = await Users.findById(id)
        res.status(200).json({
           data:data 
        })
    }catch(err){
        res.status(404).send(err)
    }
}


 // Create User
exports.addUsers = async (req,res)=>{
    try{
        const users = new Users(req.body)
        const data = await users.save()
        res.status(201).send(data)
    }catch(err){
      res.status(404).send(err)
    }
}


//PUT
exports.updateUsers = async (req,res)=>{
    try{
        const id = req.params.usersId
        const data = await Users.findByIdAndUpdate(id, req.body)
        res.send(data)
    }catch(err){
        res.status(404).send(err)
    }
}

// DELETE
exports.deleteUser = async (req,res)=>{
    try{
        const id = req.params.employeeId
        const data = await Users.findByIdAndDelete(id)
        res.send(data)
    }catch(err){
        res.status(404).send(err)
    }
}