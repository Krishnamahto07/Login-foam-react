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
    <div className='flex justify-around items-center gap-5 w-full h-10 pt-3'>
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
        <div className='flex gap-3'>
        {!isLoggedin &&
          <Link to='/login'>
            <button>Login</button>
          </Link>
        }
        {!isLoggedin &&
          <Link to='/signup'>
            <button>Sign Up</button>
          </Link>
        }
        {isLoggedin &&
          <Link to='/'>
            <button onClick={()=>{
              setIsLoggedin(false)
              toast.success("Loged Out successfull !")
            }}>Logout</button>
          </Link>
        }
        { isLoggedin &&
          <Link to='/dashboard'>
            <button>Dashboard</button>
          </Link>
        }
        </div>


        <button onClick={()=>{clickHandler()}}>Mode</button>
    </div>
  )
}
