import Header from "./Header";
import { useRef, useState } from "react";
import { LOGIN_BODY_IMG, PHOTO_URL } from "../utils/Constaints";
import { ValidateLogin } from "../utils/ValidateLogin";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
	const [isSignIn, setIsSignIn] = useState(true);
	const name = useRef("");
	const email = useRef(null);
	const password = useRef(null);
	const [errMessage, setErrMessage] = useState(null);
	const dispatch = useDispatch();


	function handleSignIn() {
		setIsSignIn(!isSignIn);
	}

	function handleValidation() {
		const errorMsg = ValidateLogin(
			email.current.value,
			password.current.value,
		);

		setErrMessage(errorMsg);

		if (errorMsg) return;

		if (!isSignIn)  //in case of signup
		{
			createUserWithEmailAndPassword(auth, email.current.value,
				password.current.value)  //we have created user with email and password only so we need to add other details of the user like name and profile url. for that we can use update api given by firebase
				.then((userCredential) => {
					// Signed up

					updateProfile(auth.currentUser, {
						displayName: name.current.value, photoURL: PHOTO_URL
					}).then(() => {
						// Profile updated!
						const { uid, email, displayName, photoURL } = auth.currentUser;  //we get all the details of the validated user just signed in.
						dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
						// ...
						
					}).catch((error) => {
						// An error occurred
						// ...
						console.log("error while updating...")
					});

				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrMessage(errorCode + "-" + errorMessage);
					// ..
				});
		}
		else { //in case of signin
			signInWithEmailAndPassword(auth, email.current.value, password.current.value)
				.then((userCredential) => {
					// Signed in 
					// ...
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrMessage(errorCode + "-" + errorMessage);
				});
		}
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
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
					className="absolute p-10 bg-black bg-opacity-60 w-1/4 my-36 left-0 right-0 mx-auto"
				>
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
					{errMessage && <span className="text-red-500 font-bold m-2 p-2">{errMessage}</span>}
					<br />
					<button
						className="p-2 h-10 text-white hover:bg-red-700 m-2 w-full bg-red-600 rounded-lg"
						onClick={() => {
							handleValidation();
						}}
					>
						{isSignIn ? "Sign In" : "Sign Up"}
					</button>
					<p className="text-gray-400 p-2 m-2">
						New to Netflix?{" "}
						<span
							onClick={() => {
								handleSignIn();
							}}
							className="hover:underline cursor-pointer text-white"
						>
							Sign up now.
						</span>
					</p>
				</form>
			</div>
		</>
	);
};

export default Login;
