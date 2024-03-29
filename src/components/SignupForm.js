import React, { useState } from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
export const SignupForm = ({setIsLoggedin}) => {
    const navigate = useNavigate();
    
    const [formData , setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    const [showPassword,setShowPassword] = useState(false);
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
        setIsLoggedin(true);
        navigate('/')
    }
  return (
    <div>
        <div>
            <button>Student</button>
            <button>Instructor</button>
        </div>
        <form onSubmit={submitHandler}>
            <div>
                <label>
                    <p>First Name<sup>*</sup></p>
                    <input type='text' 
                    placeholder='Enter First Name :'
                    required 
                    name='firstName'
                    onChange={changeHandler}
                    value={formData.firstName} />
                </label>
                <label>
                    <p>Last Name<sup>*</sup></p>
                    <input type='text' 
                    placeholder='Enter Last Name :'
                    required name='lastName'
                    onChange={changeHandler}
                    value={formData.lastName} />
                </label>
            </div>
            <label>
                <p>Email Address <sup>*</sup></p>
                <input type='email' 
                placeholder='Enter Email Address :'
                required name='email'
                onChange={changeHandler}
                value={formData.email} />
            </label>
            <div>
                <label>
                    <p>Password<sup>*</sup></p>
                    <input type={showPassword ? ("text"):("password")} 
                    placeholder='Enter Password'
                    required name='password'
                    onChange={changeHandler}
                    value={formData.password} />
                    <span onClick={()=> setShowPassword((prev)=>!prev)}>
                    {showPassword ? (<IoEyeOffOutline/>) : (<IoEyeOutline/>)}
                    </span>
                </label>
                <label>
                    <p>Cofirm Password<sup>*</sup></p>
                    <input type={showPassword ? ("text"):("password")} 
                    placeholder='Enter Password'
                    required name='password'
                    onChange={changeHandler}
                    value={formData.password} />
                    <span onClick={()=> setShowPassword((prev)=>!prev)}>
                    {showPassword ? (<IoEyeOffOutline/>) : (<IoEyeOutline/>)}
                    </span>
                </label>
            </div>
            <button >Create Account</button>
        </form>
    </div>
  )
}
