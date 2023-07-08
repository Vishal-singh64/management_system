import { useState } from 'react';
import {MdOutlineArrowDropDown} from 'react-icons/md'
import {SiManageiq} from 'react-icons/si'

const Header=()=> {

  const [show, setshow] = useState("hidden")

  const toggle=()=>{
    if(show=="hidden"){
      setshow("")
    }else{
      setshow("hidden")
    }
  }

  return (
    <div className="flex flex-row justify-between h-20 w-full bg-green-500 ">
    <div className="m-4 text-white text-2xl flex flex-row"><SiManageiq className="mt-1 mr-2" size={28}/>Management Systems </div> 
    <div className="relative mt-5 mr-3">
    <button className="px-8 py-1"><MdOutlineArrowDropDown size={24} color='white' onClick={()=>{toggle()}} /></button> 
      
      <ul className={`mt-2 ${show} space-y-1 bg-white rounded-md shadow-md`}>
        <li className="px-4 py-2 hover:bg-gray-100">Profile</li>
        <li className="px-4 py-2 hover:bg-gray-100">Setting</li>
        <li className="px-4 py-2 hover:bg-gray-100">LogOut</li>
      </ul>
    </div>
    </div>
  );
}

export default Header;