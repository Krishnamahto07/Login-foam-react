import React, { useState } from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export const SignupForm = ({setIsLoggedin}) => {
    const navigate = useNavigate();
    const [accountType , setAccountType] = useState("student");
    const [formData , setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    const [showPassword,setShowPassword] = useState(false);
    const [showCnfmPassword,setCnfmShowPassword] = useState(false);

    function changeHandler(e){
        setFormData((prev) => (
            {
                ...prev,
                [e.target.name]:e.target.value
            }
        ))
    }
    function submitHandler(e){
        e.preventDefault();
        if(formData.password === formData.confirmPassword) {
        setIsLoggedin(true);
        navigate('/')
        toast.success("Login Succussfull");
        const accountData = {
            ...formData
        }
        const finalData = {
            ...accountData,
            accountType
        }
        console.log(finalData);
        }
        else 
        toast.error("Password Mismatch")

    }
  return (
    <div className='w-full' >
        <div className='flex bg-yellow-700 p-1 text-gray-300 font-semibold max-w-max rounded-full gap-5 mt-2'>
            <button 
            className={`${accountType === "student"?"bg-gray-800":""} px-2 py-1 rounded-full transition-all duration-200`}
            onClick={()=>setAccountType("student")}>Student</button>
            <button 
            className={`${accountType === "instructor"?"bg-gray-800":""} px-2 py-1 rounded-full transition-all duration-200`}
            onClick={()=>setAccountType("instructor")}>Instructor</button> 
        </div>
        <form onSubmit={submitHandler}>
        {/* //  className='flex flex-col w-full mt-2 gap-2' */}
            <div className='flex gap-x-3 '>
                <label>
                    <p className='text-[0.88rem] text-black dark:text-white'>First Name<sup className='text-pink-500 font-bold'>*</sup></p>
                    <input type='text' 
                    placeholder='Enter First Name :'
                    required 
                    name='firstName'
                    onChange={changeHandler}
                    value={formData.firstName}
                    className='bg-gray-800 rounded-[0.5rem] text-gray-5 w-full p-3
            font-semibold text-white' />
                </label>
                <label>
                <p className='text-[0.88rem] text-black dark:text-white'>Last Name<sup className='text-pink-500 font-bold'>*</sup></p>
                    <input type='text' 
                    placeholder='Enter Last Name :'
                    required name='lastName'
                    onChange={changeHandler}
                    value={formData.lastName} 
                    className='bg-gray-800 rounded-[0.5rem] text-gray-5 w-full p-3
            font-semibold text-white'/>
                </label>
            </div>
            <label>
            <p className='text-[0.88rem] text-black dark:text-white'>Email Address<sup className='text-pink-500 font-bold'>*</sup></p>
                <input type='email' 
                placeholder='Enter Email Address :'
                required name='email'
                onChange={changeHandler}
                value={formData.email}
                className='bg-gray-800 rounded-[0.5rem] text-gray-5 w-full p-3
            font-semibold text-white' />
            </label>
            <div className='flex gap-x-3'>
                <label className='relative'>
                <p className='text-[0.88rem] relative text-black dark:text-white'> Create Password<sup className='text-pink-500 font-bold'>*</sup></p>
                    <input type={showPassword ? ("text"):("password")} 
                    placeholder='Enter Password'
                    required name='password'
                    onChange={changeHandler}
                    value={formData.password} 
                    className='bg-gray-800 rounded-[0.5rem] text-gray-5 w-full p-3
            font-semibold text-white'/>
                    <span 
                    className='absolute right-3 top-[34px] cursor-pointer text-[#AFB2BF]'
                    onClick={()=> setShowPassword((prev)=>!prev)}>
                    {showPassword ? (<IoEyeOffOutline fontSize={24}/>) : (<IoEyeOutline fontSize={24}/>)}
                    </span>
                </label>
                <label className='relative'>
                <p className='text-[0.88rem] text-black dark:text-white'>Confirm Password<sup className='text-pink-500 font-bold'>*</sup></p>
                    <input type={showCnfmPassword ? ("text"):("password")} 
                    placeholder='Enter Password'
                    required name='confirmPassword'
                    onChange={changeHandler}
                    value={formData.confirmPassword} 
                    className='bg-gray-800 rounded-[0.5rem] text-gray-5 w-full p-3
            font-semibold text-white'/>
                    <span 
                    className='absolute right-3 top-[34px]  cursor-pointer text-[#AFB2BF]'
                    onClick={()=> setCnfmShowPassword((prev)=>!prev)}>
                    {showCnfmPassword ? (<IoEyeOffOutline fontSize={24}/>) : (<IoEyeOutline fontSize={24}/>)}
                    </span>
                </label>
            </div>
            <button className='bg-yellow-700 w-full rounded-md font-medium text-black dark:text-white py-[8px] px-[12px] mt-4'>Create Account</button>
        </form>
    </div>
  )
}
