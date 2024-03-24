import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
export const LoginForm = (props) => {
    const {isLoggedin , setIsLoggedIn} = props;
    // console.log(setIsLoggedIn);
    function hlo(){
        console.log("hlo");
    }
    console.log(hlo);
    console.log(isLoggedin,"in login");
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
        setIsLoggedIn(true);
        toast.success("Login Succussfull");
        navigate('/dashboard');
    }
  return (
    <form onSubmit={submitHandler}>
        <label>
            <p>Email Address<sup>*</sup></p>
            <input required type='email' 
            value={formData.email}
            onChange={changeHandler}
            placeholder='Enter Your Email :'
            name='email' />
        </label>

        <label>
            <p>Password<sup>*</sup></p>
            <input required value={formData.password}
            onChange={changeHandler}
            type={showPassword ? 'text':'password'} 
            placeholder='Enter Your Password :'
            name='password' />
        </label>
        <span onClick={()=> setShowPassword((prev)=>!prev)}>
            {showPassword ? (<IoEyeOffOutline/>) : (<IoEyeOutline/>)}
        </span>
        <Link to="#">
            <p>Forget Password</p>
        </Link>
        <button>Sign In</button>
    </form>
  )
}
