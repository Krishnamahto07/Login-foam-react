import React from 'react'
import frame from '../assests/frame.png'
import { SignupForm } from './SignupForm'
import { LoginForm } from './LoginForm'
import { FcGoogle } from "react-icons/fc";
export const Template = ({title , desc1 , desc2 , image , formtype ,setIsLoggedin }) => {
  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12'>
        <div>
            <h1 className='dark:text-white text-black font-semibold text-[2rem] leading-[2rem]'>{title}</h1>
            <p className='text-[1.125rem] leading-[1.3rem] mt-3 font-semibold'>
                <span className=''>{desc1}</span>
                <br/>
                <span className='text-[#57007E] italic'>{desc2}</span>
            </p>
            {
                formtype === "signup" ?
                (<SignupForm setIsLoggedin={setIsLoggedin} />):
                (<LoginForm setIsLoggedin={setIsLoggedin} />)
            }
            <div className='flex w-full items-center my-4 gap-x-3'>
                <div className='h-[2px] bg-black dark:bg-white w-1/3'></div>
                <p className='text-black dark:text-white font-semibold leading-5'>OR</p>
                <div className='h-[2px] bg-black dark:bg-white w-1/3'></div>
            </div>
            <button className='flex font-semibold w-full rounded-lg text-black dark:text-white px-[12px] items-center gap-2 text-xl border dark:border-white border-black justify-center py-[8px]'>
                <FcGoogle />
                <p> Sign Up with Google </p>
            </button>
        </div>
        <div>
            <img src={frame} alt='pattern' width={558} height={504} loading='lazy'/>
            <img src={image} alt='pattern' width={558} height={504} loading='lazy'/>
        </div>
    </div>
  )
}
