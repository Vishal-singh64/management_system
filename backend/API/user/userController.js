const router =require('express').Router();

const {getUser,getUserById,addUser,updateUser,deleteUser}=require('./userService')


router.get('/',getUser)
// ----------------------------------------------------------------//
router.get('/:id',getUserById)
// ----------------------------------------------------------------//
router.post('/',addUser)
// ----------------------------------------------------------------//
router.patch('/:id',updateUser)
// ----------------------------------------------------------------//
router.delete('/:id',deleteUser)
// ----------------------------------------------------------------//

module.exports =router;