// const router =require('express').Router();
const { query } = require('express');
const conn =require('../../config/conn');



//------------------------------------------------------------//
const getStudentData=(req,res)=>{
    conn.query('select * from student where student_status=1',(err,result)=>{
        if(err){
            res.json({
                status:0,
                msg:"Erroe"
            })
        }
        res.json(result)
    })
}

// const getStudentData=(req,res)=>{
//     conn.query('select * from student where student_status =1',(err,result)=>{
//        res.json(result)
//     })
   
// }
// ------------------------------------------------------------//
const getStudentDataById=(req,res)=>{
    const id=req.params.id;
    conn.query(`select * from student where student_id=${id} AND student_status =1`,(err,result)=>{
        if(err){
            res.json({
                "status":0,
                "msg":err
            })
        }
        res.json({
            "status":1,
            "data":result
        })
    })
   
}
// ------------------------------------------------------------//
const addStudentData=(req,res)=>{
    var data=req.body;

    conn.query(`INSERT INTO student( student_name, student_father_name, student_mother_name, student_age, student_address, student_registration_date,student_status) VALUES (?,?,?,?,?,?,1)`,
    [
        data.student_name, 
        data.student_father_name, 
        data.student_mother_name, 
        data.student_age, 
        data.student_address,
        data.student_registration_date, 
    ],
    (err,result)=>{
        if(err){
            console.log(err)
        }
        res.json({
            status:1,
            data:'Student Added successfully',
        })
    })
    
}

// -----------------------------------------------------------//
const updateStudentData=(req,res)=>{
    const id=parseInt(req.params.id);
    const data=req.body;
    conn.query(`UPDATE student SET student_name=?,student_father_name=?,student_mother_name=?,student_age=?,student_address=? where student_id=?`,
    [
        data.student_name, 
        data.student_father_name, 
        data.student_mother_name, 
        data.student_age, 
        data.student_address, 
        id,
    ],
    (err,result)=>{
        if(err){
            console.log(err)
        }
        res.json({
            status:1,
            data:'Student updated successfully',
        })
    })
    
}
// -----------------------------------------------------------//
const deleteStudentData=(req,res)=>{
    const data=req.body;
    const id=parseInt(req.params.id)
    conn.query(`UPDATE student SET student_status=? where student_id = ${id}`,
    [
    data.student_status,
    ],
    (err,result)=>{
        if(err){
            console.log(err)
        }
        res.json({
            status:1,
            msg:"Student Deleted successfully"
        })
})
}
// -----------------------------------------------------------//

module.exports={
    getStudentData,getStudentDataById,addStudentData,updateStudentData,deleteStudentData
}