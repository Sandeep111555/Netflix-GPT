import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
	const dispatch = useDispatch();
	const appRouter = createBrowserRouter([
		{
			path: "/",
			element: < Login />,
		},
		{
			path: "/browse",
			element: <Browse />,
		},
	]);
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/auth.user

				const { uid, email, displayName,photoURL } = user;  //we get all the details of the validated user just signed in.
				dispatch(addUser({uid:uid, email:email, displayName:displayName,photoURL:photoURL}))  //it will trigger the adduser reducer function and adds the user to the userSlice
			} else {
				// User is signed out
				// ...
				dispatch(removeUser()) //this will be called when there is logout event
			}
		});
	}, []);



	return (
		<>
			<RouterProvider router={appRouter}>
			</RouterProvider>
		</>
	);
};

export default Body;
