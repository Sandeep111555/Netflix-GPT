import Header from "./Header";
import { useRef, useState } from "react";
import { LOGIN_BODY_IMG } from "../utils/Constaints";
import { ValidateLogin } from "../utils/ValidateLogin";


const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const name = useRef('');
  const email = useRef(null);
  const password = useRef(null);
  const [errMessage, setErrMessage] = useState(null);

  function handleSignIn() {
    setIsSignIn(!isSignIn);
  }

  function handleValidation(){
    console.log(email.current.value,password.current.value,name.current.value)
    const errorMsg = ValidateLogin(email.current.value,password.current.value,name.current.value)
    setErrMessage(errorMsg)
  }
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src={LOGIN_BODY_IMG}
          className="brightness-50"
          alt="body_image"
        />
      </div>
      <div>
        <form onSubmit={(e)=>{e.preventDefault()}} className="absolute p-10 bg-black bg-opacity-60 w-1/4 my-36 left-0 right-0 mx-auto" >
          <h1 className="text-white font-bold text-3xl my-2 p-2">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="m-2 p-2 w-full h-12 bg-black  bg-opacity-10 border  border-gray-500 text-white"
            />
          )}

          <input
          ref={email}
            type="text"
            placeholder="Email or Mobile Number"
            className="m-2 p-2 w-full h-12 bg-black  bg-opacity-10 border  border-gray-500 text-white"
          />
          <br />
          <input
          ref={password}
            type="password"
            placeholder="Password"
            className="m-2 p-2 h-12 w-full bg-black border bg-opacity-10 border-gray-500 text-white"
          />
          <p className="text-red-500 font-bold m-2 p-2">{errMessage}</p>
          <br />
          <button className="p-2 h-10 text-white hover:bg-red-700 m-2 w-full bg-red-600 rounded-lg" onClick={()=>{handleValidation()}}>
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="text-white p-2 m-2 cursor-pointer"
            onClick={() => {
              handleSignIn();
            }}
          >
            New to Netflix? Sign up now.
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
