import React from 'react'
import frame from '../assests/frame.png'
import { SignupForm } from './SignupForm'
import { LoginForm } from './LoginForm'
export const Template = ({title , desc1 , desc2 , image , formtype ,setIsLoggedIn ,isLoggedin}) => {
    console.log(isLoggedin, " in template.js");
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>
            {
                formtype === "signup" ?
                (<SignupForm setIsLoggedIn={setIsLoggedIn} isLoggedin={isLoggedin}/>):
                (<LoginForm setIsLoggedIn={setIsLoggedIn} isLoggedin={isLoggedin}/>)
            }
            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>
            <button>
                <p>Sign Up with Google</p>
            </button>
        </div>
        <div>
            <img src={frame} alt='pattern' width={558} height={504} loading='lazy'/>
            <img src={image} alt='pattern' width={558} height={504} loading='lazy'/>
        </div>
    </div>
  )
}
