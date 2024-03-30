import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
export const LoginForm = (props) => {
    const { setIsLoggedin} = props;   
    const navigate = useNavigate();
    const [formData , setFormData] = useState({
        email:"",
        password:""
    })
    const [showPassword , setShowPassword] = useState(false);
    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }
    function submitHandler(e){
        e.preventDefault();
        setIsLoggedin(true);
        toast.success("Login Succussfull");
        navigate('/dashboard');
        console.log("Final data : ");
        console.log(formData);
    } 
  return (
    <form onSubmit={submitHandler}
    className='flex flex-col w-full mt-2 gap-2'>
        <label className='w-full'>
            <p className='text-[0.88rem] text-black dark:text-white'>Email Address<sup className='text-pink-500 font-bold'>*</sup></p>
            <input required type='email' 
            value={formData.email}
            onChange={changeHandler}
            placeholder='Enter Your Email :'
            name='email' 
            className='bg-gray-800 rounded-[0.5rem] text-gray-5 w-full p-3
            font-semibold text-white'/>
        </label>

        <label className='w-full relative'>
            <p className='text-[0.88rem] text-black dark:text-white'>Password<sup className='text-pink-500 font-bold' >*</sup></p>
            <input required value={formData.password}
            onChange={changeHandler}
            type={showPassword ? 'text':'password'} 
            placeholder='Enter Your Password :'
            name='password'
            className='bg-gray-800 rounded-[0.5rem] text-gray-5 w-full p-3
            font-semibold text-white' />
        
        <span 
        className='absolute right-3 top-[34px] cursor-pointer text-[#AFB2BF]'
        onClick={()=> setShowPassword((prev)=>!prev)}>
            {showPassword ? (<IoEyeOffOutline fontSize={24} fill='#AFB2BF'/>) : (<IoEyeOutline
           fontSize={24} fill='#AFB2BF'/>)}
        </span>
        <Link to="#">
            <p className='text-xs text-blue-300 max-w-max mt-1 ml-auto'>Forget Password</p>
        </Link>
        </label>
        <button className='bg-yellow-700 rounded-md font-medium text-black dark:text-white py-[8px] px-[12px]'>Sign In</button>
    </form>
  )
}
