import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)

  const toggleSignInForm =(e)=>{
    e.preventDefault();
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
        <Header/>
        <div> 
          <img 
              className='absolute'
              src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
              alt='Netflix_logo'
          />  
        </div>
        <form className='absolute w-3/12  p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
          <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In":"Sign Up"} </h1>
          <input type='text' name="email" placeholder='email' className='p-4 my-4 w-full bg-gray-700 ' />
          <input type='text' name="password" placeholder='password' className='p-4 my-4 w-full bg-gray-700 '/>
          <button className=' p-4 my-6 bg-red-700 w-full rounded-lg' onClick={toggleSignInForm}> Sign In</button>
          <p>New to Netflix? Sign up now</p>
        </form>
   </div>
  )
}

export default Login