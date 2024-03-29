import React from 'react'
import { Template } from '../components/Template'
import loginImg from "../assests/login.png"
export const Login = ({setIsLoggedin }) => {
  return (
    
      <Template title="Welcome Back"
        desc1="Build skills for today , tomorrow and beyond."
        desc2="Education to futute-proof your carrer."
        image={loginImg} formtype="login"
        setIsLoggedin={setIsLoggedin} 
      />
    
  )
}
