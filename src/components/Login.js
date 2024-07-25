import { useState } from "react";
import Header from "./Header";

const Login = () => {

    const[isSignIn,setIsSignIn]=useState(true)


    const ToggleSignIn=()=>{

        setIsSignIn(!isSignIn)
    }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg" />
      </div>

      <form className="w-4/12 absolute my-32 mx-auto right-0 left-0 p-12 bg-black text-white opacity-90">
        <h1 className="font-bold text-3xl py-4">{isSignIn?"Sign In":"Sign Up"}</h1>
        {!isSignIn &&<input type="text" placeholder="Full Name" className="p-4 my-2 w-full rounded-md bg-gray-800"/>}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full rounded-md bg-gray-800"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full rounded-md bg-gray-800"
        />
        <button className="p-2 my-4 bg-red-700 w-full rounded-md">{isSignIn?"Sign In":"Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={ToggleSignIn}>{isSignIn?"New to Netflix? Sinup now":"Already registred Sign In"}</p>
      </form>
    </div>
  );
};

export default Login;
