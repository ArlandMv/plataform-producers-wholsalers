//define routes for app

import {Router} from 'express'  
const router = Router()

import * as userCtrl from '../controllers/users.controller'

router.get('/users', userCtrl.getUsers)

router.get('/users/:id', userCtrl.getUser)

router.post('/users', userCtrl.createUser)

router.delete('/users/:id', userCtrl.hardDeleteUser)

router.put('/users/:id', userCtrl.updateUser)

export default router //es5 module.exports = router