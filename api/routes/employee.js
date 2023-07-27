const express = require('express')
const router = express.Router()
// const Employee = require('../models/employee')
const employeeContoller = require('../controller/employee')

//GET
router.get('/',employeeContoller.getEmployee)

//GET Single ID
router.get('/:employeeId', employeeContoller.getEmployeebyId)

//POST
router.post('/', employeeContoller.addEmployee )

//PUT
router.put('/:employeeId', employeeContoller.updateEmployee)

//DELETE

router.delete('/:employeeId', employeeContoller.deleteEmployee)



module.exports = router