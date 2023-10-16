import React from 'react'
import Header from './Header'

const Login = () => {
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
        <form className='absolute w-3/12  p-12 bg-black my-36 mx-auto right-0 left-0'>
          <input type='text' placeholder='email' className='p-2 m-2'/>
          <input type='text' placeholder='email' className='p-2 m-2'/>
          <button className='p-4 m-4'> Sign In</button>
        </form>
   </div>
  )
}

export default Login