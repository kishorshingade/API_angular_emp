const express = require('express')
const router = express.Router()
const usersController = require('../controller/users')



//GET
router.get('/',usersController.getUsers)

//GET Single ID
router.get('/:usersId',usersController.getUserId)

//POST

router.post('/',usersController.addUsers)

//PUT
router.put('/:usersId',usersController.updateUsers)

//DELETE

router.delete('/:usersId',usersController.deleteUser)


module.exports = router