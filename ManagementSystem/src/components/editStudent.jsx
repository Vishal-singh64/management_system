import axios from 'axios';
import { useEffect, useState} from 'react'
import { toast } from 'react-hot-toast';
import {FaEdit} from 'react-icons/fa'


export default function EditStudent(props) {
    const [data, setdata] = useState([])
    const [show, setshow] = useState(false)

    const [userData,setUserData]=useState(data);


// ===================formHandle===================//
let name,value;
const formHandle=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setUserData({...userData,[name]:value});
    }
    
// ===================formHandle===================//
   
    

//=====================date Converter=====================//
const dateConverter=(givenDate)=>{
    const inputDate = givenDate
    const date = new Date(inputDate);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getUTCDate()).padStart(2, '0');
    
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
   }
//=====================date Converter ends=====================//


// ==================Handle Update Ends============================//
   const updateData=async()=>{
    await axios.patch(`http://localhost:3000/api/student/${props.id}`,userData)
    .then(()=>toast("Student Data Updated Successfully"))
    setshow(false)
    window.location.reload(false)
   }
// ==================Handle Update Ends============================//

   const getData=async()=>{
    const res=await axios.get(`http://localhost:3000/api/student/${props.id}`)
   setdata(res.data.data[0])
 }

   useEffect(()=>{
    getData();
    setUserData(data)
   },[show])



    return (
    <div>
     <button title="Update Data" onClick={()=>{setshow(true)}}>
     <FaEdit size={18} color="green"/>
    </button>
    
        <div className={`fixed inset-0 flex justify-center items-center  transition-colors ${show ? "visible bg-black bg-opacity-10 backdrop-blur-sm" :"invisible"}`}>
                {/*Modal Container */}
                <div className="h-auto w-3/5 bg-white rounded-lg">
                        {/* header */}
                        <div className="text-green-500 text-xl m-4">Edit Student</div>
                        <div className="h-0.5 bg-green-500 mt-5"></div>
                        {/* form */}
                            <form className="m-5 px-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <input type="text" name="student_name" value={userData.student_name}  placeholder="Student Full Name" onChange={formHandle} autoComplete="off" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 px-2 " required/>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <input type="text" name="student_father_name" value={userData.student_father_name}  placeholder="Student Father's Name" onChange={formHandle} autoComplete="off" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 px-2 " required/>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <input type="text" name="student_mother_name" value={userData.student_mother_name}   placeholder="Student Mother's Name" onChange={formHandle} autoComplete="off" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 px-2 " required/>
                                    </div>

                                    <div className="sm:col-span-1">
                                        <input type="text" name="student_age" value={userData.student_age}   placeholder="Age" autoComplete="off" onChange={formHandle} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 px-2 "/>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <input type="date" name="student_registration" value={dateConverter(userData.student_registration_date)}   placeholder="Date" onChange={formHandle} autoComplete="off" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 px-2 "/>
                                    </div>
                                    <div className="sm:col-span-6">
                                        <input type="text" name="student_address" value={userData.student_address}   placeholder="Student Full Address" onChange={formHandle} autoComplete="off" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1  placeholder:text-gray-400 px-2 "/>
                                    </div>  

                         {/* buttons */}
                         <div className="flex flex-row">
                        <button onClick={()=>{setshow(false)}} className='rounded-md h-10 px-4 bg-green-500 mr-4'>Cancel</button>
                        <button className='rounded-md h-10 px-4 bg-green-500 mr-4' onClick={()=>{updateData()}}>Update</button>

                            </div>       
                            </form>
                            
                           

                </div>
         </div>
    
    </div>
        

  )
}
