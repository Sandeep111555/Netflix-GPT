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
	
	return (
		<>
			<RouterProvider router={appRouter}>
			</RouterProvider>
		</>
	);
};

export default Body;
