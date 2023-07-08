const router =require('express').Router();

const {  getStudentData,getStudentDataById,addStudentData,updateStudentData,deleteStudentData}=require('./studentService')


router.get('/',getStudentData)

// ----------------------------------------------------------------//
router.get('/:id',getStudentDataById)
// ----------------------------------------------------------------//
router.post('/',addStudentData)
// ----------------------------------------------------------------//
router.patch('/:id',updateStudentData)
// ----------------------------------------------------------------//
router.put('/:id',deleteStudentData)
// ----------------------------------------------------------------//

module.exports =router;