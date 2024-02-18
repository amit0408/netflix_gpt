import React, { useState , useRef } from 'react';
import Header from './Header';
import { checkValidate } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg ,setErrorMsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  
  const handleCheckvalidate =()=>{
    
    const message = checkValidate( email.current.value, password.current.value);
    setErrorMsg(message);


  }
  const toggleSignInForm = (e) => {
    e.preventDefault();
    setIsSignInForm(!isSignInForm);
  };


  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Netflix_logo"
        />
      </div>
      <form onSubmit={ (e)=>{e.preventDefault()}} className="absolute w-3/12  p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {' '}
          {isSignInForm ? 'Sign In' : 'Sign Up'}{' '}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 "
          />
        )}
        <input
         ref={email}
          type="text"
          name="email"
          placeholder="email"
          className="p-4 my-4 w-full bg-gray-700 "
        />
        <input
         ref={password}
          type="password"
          name="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-700 "
        />
        <p className="text-red-600 ">{errorMsg}</p>
        <button onClick={handleCheckvalidate} className=" p-4 my-6 bg-red-700 w-full rounded-lg">
          {' '}
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? 'New to Netflix ? Sign Up now'
            : 'Already user ? Sign In Now'}
        </p>
      </form>
    </div>
  );
};

export default Login;
