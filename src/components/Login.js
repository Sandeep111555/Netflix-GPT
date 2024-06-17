import React from "react";
import Header from "./Header";
import { useState } from "react";
import { LOGIN_BODY_IMG } from "../utils/Constaints";
const Login = () => {
	const [isSignIn, setIsSignIn] = useState(true);
	function handleSignIn() {
		setIsSignIn(!isSignIn);
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
				<form className="absolute p-10 bg-black bg-opacity-60 w-1/4 my-36 left-0 right-0 mx-auto">
					<h1 className="text-white font-bold text-3xl my-2 p-2">
						{isSignIn ? "Sign In" : "Sign Up"}
					</h1>
					{!isSignIn && (
						<input
							type="text"
							placeholder="Full Name"
							className="m-2 p-2 w-full h-12 bg-black  bg-opacity-10 border border-white"
						/>
					)}

					<input
						type="email"
						placeholder="Email or Mobile Number"
						className="m-2 p-2 w-full h-12 bg-black  bg-opacity-10 border border-white"
					/>
					<br />
					<input
						type="password"
						placeholder="Password"
						className="m-2 p-2 h-12 w-full bg-black border bg-opacity-10 border-white"
					/>
					<br />
					<button className="p-2 h-10 text-white hover:bg-red-700 m-2 w-full bg-red-600 rounded-lg">
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
