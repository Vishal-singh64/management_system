// const router =require('express').Router();
const conn =require('../../config/conn');
const {genSaltSync,hashSync} =require('bcrypt');


// ------------------------------------------------------------//
const getUser=(req,res)=>{
    conn.query('select * from users',(err,result)=>{
        if(err){
            console.log(err)
        }
        res.json({
            data:result,
        })
    })
}
// ------------------------------------------------------------//
const getUserById=(req,res)=>{
    const id=req.params.id;
    conn.query(`select * from users where id =${id}`,(err,result)=>{
        if(err){
            res.json({
                status:0,
                msg:"something went wrong"
            })
        }
        res.json({
            status:1,
            data:result,
        })
    })   
}
// ------------------------------------------------------------//
const addUser=(req,res)=>{
    var data=req.body;
    const salt=genSaltSync(10);
    data.password=hashSync(data.password,salt);
    conn.query(`insert into users (userName,password) values (?,?)`,
    [
        data.username,
        data.password,
    ],
    (err,result)=>{
        if(err){
            console.log(err)
        }
        res.json({
            status:1,
            data:'user Addes successfully',
        })
    })
    
}

// -----------------------------------------------------------//
const updateUser=(req,res)=>{
    const id=parseInt(req.params.id);
    const data=req.body;
    const salt=genSaltSync(10);
    data.password=hashSync(data.password,salt);
    conn.query(`update users set userName= ? ,password=? where id=?`,
    [
        data.username,
        data.password,
        id,
    ],
    (err,result)=>{
        if(err){
            console.log(err)
        }
        res.json({
            status:1,
            data:'user updated successfully',
        })
    })
    
}
// -----------------------------------------------------------//
const deleteUser=(req,res)=>{
    conn.query('delete users where id = ?'),[ parseInt(req.params.id)],(err,result)=>{
        if(err){
            console.log(err)
        }
        res.json({
            status:1,
            msg:"user Deleted successfully"
        })
    }
}
// -----------------------------------------------------------//

module.exports={
    getUser,getUserById,addUser,updateUser,deleteUser
}