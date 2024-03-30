import React from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import logo from "../assests/Logo.svg"

export const Navbar = (props) => {
  
  let {darkTheme , setDarkTheme ,setIsLoggedin , isLoggedin} = props;
    function clickHandler(){
        darkTheme ? setDarkTheme(false) : setDarkTheme(true)
    }
  return (
    <div className='flex justify-around items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <Link to="/" className=''>
          <img src={logo} alt='logo' width={160} height={80} loading='lazy'/>
        </Link>

        <div>
          <ul className='flex gap-4'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/'>About</Link>
            </li>
            <li>
              <Link to='/'>Contact</Link>
            </li>
          </ul>
        </div>
        <div className='flex items-center gap-x-4 '>
        {!isLoggedin &&
          <Link to='/login'>
            <button className='bg-gray-800 text-white rounded-lg border px-[12px] py-[8px] border-gray-900'>Login</button>
          </Link>
        }
        {!isLoggedin &&
          <Link to='/signup'>
            <button className='bg-gray-800 text-white rounded-lg border px-[12px] py-[8px] border-gray-900'>Sign Up</button>
          </Link>
        }
        {isLoggedin &&
          <Link to='/'>
            <button 
            className='bg-gray-800 text-white rounded-lg border px-[12px] py-[8px] border-gray-900'
            onClick={()=>{
              setIsLoggedin(false)
              toast.success("Loged Out successfull !")
            }}>Logout</button>
          </Link>
        }
        { isLoggedin &&
          <Link to='/dashboard'>
            <button
            className='bg-gray-800 text-white rounded-lg border px-[12px] py-[8px] border-gray-900'>Dashboard</button>
          </Link>
        }
        </div>


        <button className='bg-gray-800 text-white rounded-lg border px-[12px] py-[8px] border-gray-900 dark:border-white ' onClick={()=>{clickHandler()}}>Mode</button>
    </div>
  )
}
