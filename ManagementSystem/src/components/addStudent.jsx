import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { GrAdd } from 'react-icons/gr';
// useState

export default function AddStudent() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:3000/api/student/", data);
      toast("Student added successfully");
      reset();
      setshow(false);
      window.location.reload(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const [show, setshow] = useState(false);

  return (
    <div>
      <button
        title="Add Student"
        onClick={() => setshow(true)}
        className="fixed z-90 bottom-10 right-8 bg-green-600 w-12 h-12 rounded-full drop-shadow-lg flex justify-center items-center text-white text-2xl"
      >
        <GrAdd />
      </button>

      <div className={`fixed inset-0 flex justify-center items-center transition-colors ${show ? "visible bg-black bg-opacity-10 backdrop-blur-sm" : "invisible"}`}>
        {/*Modal Container */}
        <div className="h-auto w-3/5 bg-white rounded-lg">
          {/* header */}
          <div className="text-green-500 text-xl m-4">Add Student</div>
          <div className="h-0.5 bg-green-500 mt-5"></div>
          {/* form */}
          <form className="m-5 px-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="sm:col-span-3">
              <input type="text" name="student_name" placeholder="Student Full Name" {...register("student_name", { required: true })} autoComplete="off" className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 px-2 ${errors.student_name ? "border-red-500" : ""}`} />
              {errors.student_name && <span className="text-red-500">Student name is required</span>}
            </div>
            <div className="sm:col-span-3">
              <input type="text" name="student_father_name" placeholder="Student Father's Name" {...register("student_father_name", { required: true })} autoComplete="off" className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 px-2 ${errors.student_father_name ? "border-red-500" : ""}`} />
              {errors.student_father_name && <span className="text-red-500">Father's name is required</span>}
            </div>
            <div className="sm:col-span-3">
              <input type="text" name="student_mother_name" placeholder="Student Mother's Name" {...register("student_mother_name", { required: true })} autoComplete="off" className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 px-2 ${errors.student_mother_name ? "border-red-500" : ""}`} />
              {errors.student_mother_name && <span className="text-red-500">Mother's name is required</span>}
            </div>

            <div className="sm:col-span-1">
              <input type="text" name="student_age" placeholder="Age" {...register("student_age", { required: true })} autoComplete="off" className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 px-2 ${errors.student_age ? "border-red-500" : ""}`} />
              {errors.student_age && <span className="text-red-500">Age is required</span>}
            </div>
            <div className="sm:col-span-2">
              <input type="date" name="student_registration_date" placeholder="Date" {...register("student_registration_date", { required: true })} autoComplete="off" className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 px-2 ${errors.student_registration_date ? "border-red-500" : ""}`} />
              {errors.student_registration_date && <span className="text-red-500">Registration date is required</span>}
            </div>
            <div className="sm:col-span-6">
              <input type="text" name="student_address" placeholder="Student Full Address" {...register("student_address", { required: true })} autoComplete="off" className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 px-2 ${errors.student_address ? "border-red-500" : ""}`} />
              {errors.student_address && <span className="text-red-500">Address is required</span>}
            </div>

            {/* <div className="h-0.5 bg-green-500 mt-5"></div> */}
            <div className="flex flex-row">
              <button onClick={() => { setshow(false) }} className='rounded-md h-10 px-4 bg-green-500 mr-4'>Cancel</button>
              <button type="submit" className='rounded-md h-10 px-4 bg-green-500'>Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
