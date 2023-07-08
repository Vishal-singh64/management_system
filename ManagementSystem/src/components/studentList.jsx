import {BiSearchAlt} from 'react-icons/Bi'
import { MdDelete } from 'react-icons/md'
import EditStudent from './editStudent'
import {  useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import axios from 'axios'


export default function StudentList() {

  const [data, setdata] = useState([])
  const [search, setSearch] = useState('')


/////////////////////// Get Data ///////////////////////
const getData=async()=>{
    const res=await axios.get("http://localhost:3000/api/student/")
    .catch((err)=>{console.log(err)})
    setdata(res.data)
 }
///////////////////////////////////////////////////////


/////////////////////  handling Delete ///////////////
 const handleDelete=async(id)=>{

  await axios.put(`http://localhost:3000/api/student/${id}`,
  {
    "student_status":0
  })
  .then(()=>{toast('Student Deleted Successfully')})
  getData()
 }
////////////////////////////////////////////////////////


//////////////////  Date conversion ///////////////////
const dateConverter=(givenDate)=>{
const inputDate = givenDate
const date = new Date(inputDate);
const day = date.getUTCDate();
const month = date.getUTCMonth() + 1; // Months are zero-based
const year = date.getUTCFullYear();
const formattedDate = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;
return formattedDate;
 }
 //////////////////////////////////////////////////////

 
  useEffect(()=>{
    getData()
    .catch(err=>{console.log(err)})
  },[]); 
  
  return (
    <>

    <div className="mx-auto w-5/6 border-black mt-3 h-screen bg-green-200 rounded-lg">

        <div className="flex flex-row justify-between ">

        <div className="m-4 text-green-500 text-2xl">Student List</div>
        <div className="m-4 relative "><input type="text" placeholder="Search" onChange={(e)=>{setSearch(e.target.value)}} className="p-1 rounded-lg focus:border-green-500" />
        <button className=" absolute right-2 top-1"><BiSearchAlt size={24} color='grey' /></button> </div>
        </div>

    <div className="h-1 bg-green-500"></div>

  <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div>
      {
        data.length===0 ? (

          <p>data not found</p>
        ) : (

        <table className="min-w-full text-center text-sm font-semibold">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4">Student Name</th>
              <th scope="col" className="px-6 py-4">Fathers Name</th>
              <th scope="col" className="px-6 py-4">Mothers Name</th>
              <th scope="col" className="px-6 py-4">Age</th>
              <th scope="col" className="px-6 py-4">Address</th>
              <th scope="col" className="px-6 py-4">Registration Date</th>
              <th scope="col" className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
          {data.filter(item=>{
           return search.toLowerCase() === " " ?item :item.student_name.toLowerCase().includes (search)
          }).map(item => (
            
              <tr className="border-b dark:border-neutral-500" key={item.id}>
              <td className="whitespace-nowrap px-6 py-4 font-medium" >{item.student_name}</td>
              <td className="whitespace-nowrap px-6 py-4">{item.student_father_name}</td>
              <td className="whitespace-nowrap px-6 py-4">{item.student_mother_name}</td>
              <td className="whitespace-nowrap px-6 py-4">{item.student_age}</td>
              <td className="whitespace-nowrap px-6 py-4">{item.student_address}</td>
              <td className="whitespace-nowrap px-6 py-4">{dateConverter(item.student_registration_date)}</td>
              <td className="whitespace-nowrap px-6 py-4 flex flex-row"><EditStudent id={item.student_id}/><button onClick={()=>{handleDelete(item.student_id)}}><MdDelete size={18} color="red"/></button></td>
            </tr> 
            ))}
          </tbody>
        </table>
        )}
      
      </div>
    </div>
  </div>
</div>
    
    </div>
    </>
  )
}

