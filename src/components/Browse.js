import React, { useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import useGetNowPlayingMovies from "../Hooks/useGetNowPlayingMovies";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryContainer from "./SecondaryContainer";
import useGetPopularMovies from "../Hooks/useGetPopulatMovies";
import useGetTopRatedMovies from "../Hooks/useGetTopRatedMovies";
import useGetTrendingMovies from "../Hooks/useGetTrendingMovies";
import useGetUpComingMovies from "../Hooks/useGetUpcomingMovies";
import { toggleGptView } from "../utils/gptSlice";
import GptComponent from "./GptComponent";
import { SUPPORTED_LANG } from "../utils/Constaints";
import { changeLang } from "../utils/configSlice";

const Browse = () => {
	const user = useSelector((store) => store.user);
	const gptToggleView = useSelector((store) => store.gpt.gptToggleView);
	const dispatch = useDispatch();
	useGetNowPlayingMovies();
	useGetPopularMovies();
	useGetTopRatedMovies();
	useGetTrendingMovies();
	useGetUpComingMovies();

	const handleSignout = () => {
		signOut(auth)
			.then(() => {})
			.catch((error) => {
				// An error happened. //this is yet to be build
			});
	};

	const handleGPTView = () => {
		dispatch(toggleGptView());
	};

	const handleLang = (e)=>{
		dispatch(changeLang(e.target.value))
	}
	return (
		<>
			<div className="absolute">
				<div>
					<Header />
				</div>
				<div className=" w-screen flex justify-end">
					<div className="flex gap-2 m-5 z-10">
						{gptToggleView && <select className="bg-gray-500 rounded-lg text-white" onChange={handleLang}>
							{SUPPORTED_LANG.map((lang)=><option key={lang.id} value={lang.id} >{lang.name}</option>)}
						</select>}
						
						<button
							className="bg-emerald-700 rounded-lg w-24 text-white hover:bg-emerald-950"
							onClick={handleGPTView}
						>
							{gptToggleView? "Home Page":"GPT Search"}
						</button>
						<div className="w-10">
							<img
								className="border rounded-lg"
								src={user?.photoURL}
								alt="profilePicture"
							/>
						</div>
						<button
							onClick={handleSignout}
							className="font-bold text-red-600"
						>
							SignOut
						</button>
					</div>
				</div>
			</div>
			{gptToggleView ? (
				<GptComponent />
			) : (
				<>
					<PrimaryContainer />
					<SecondaryContainer />
				</>
			)}
		</>
	);
};

export default Browse;
