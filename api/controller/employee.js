const mongoose = require('mongoose')
const Employee = require('../models/employee')


// GET ALL
exports.getEmployee = async (req,res)=>{
    try{
  const data = await Employee.find({})
   res.status(200).send(data)
    }catch(err){
        res.status(404).send(err)
    }
}

// // GET ID

exports.getEmployeebyId  = async(req,res) =>{
    try{
        const id = req.params.employeeId
        const data = await Employee.findById(id)
        res.status(200).send(data)
    }catch(err){
        res.status(404).send(err)
    }
}


 // POST Method
exports.addEmployee = async (req,res)=>{
    try{
        const employee = new Employee(req.body)
        const data = await employee.save()
        res.status(201).send(data)
    }catch(err){
      res.status(404).send(err)
    }
}


//PUT
exports.updateEmployee = async (req,res)=>{
    try{
        const id = req.params.employeeId
        const data = await Employee.findByIdAndUpdate(id, req.body)
        res.send(data)
    }catch(err){
        res.status(404).send(err)
    }
}

// DELETE
exports.deleteEmployee = async (req,res)=>{
    try{
        const id = req.params.employeeId
        const data = await Employee.findByIdAndDelete(id)
        res.send(data)
    }catch(err){
        res.status(404).send(err)
    }
}