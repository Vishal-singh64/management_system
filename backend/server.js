const express =require('express');
require('dotenv').config();
const bodyParser =require('body-parser')
const cors =require('cors')

const getUser =require('./API/user/userController.js')
const getStudent =require('./API/students/studentController.js')


const app =express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

// ==========================================

// ==========================================
// -----------// Routes start here //----------//


app.use('/api/user',getUser);
app.use('/api/student',getStudent);

// -----------// Routes ends here //----------//


app.listen(process.env.PORT,()=>{
    console.log('listning at port :',process.env.PORT);
})