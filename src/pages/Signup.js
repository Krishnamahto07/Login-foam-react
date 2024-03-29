import React from 'react'
import { Template } from '../components/Template'
import signupImg from '../assests/signup.png'
export const Signup = ({setIsLoggedin }) => {
  return (
    <Template title="Welcome Back"
        desc1="Build skills for today , tomorrow and beyond."
        desc2="Education to futute-proof your carrer."
        image={signupImg} formtype="signup"
        setIsLoggedin={setIsLoggedin}
      />
  )
}
