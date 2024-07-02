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

	const handleLang = (e) => {
		dispatch(changeLang(e.target.value));
	};
	return (
		<div>
			<Header />
			<div className=" w-screen flex md:justify-end justify-center bg-black">
				<div className="flex gap-2 m-5 z-10 mt-14 md:mt-5">
					{gptToggleView && (
						<select
							className="bg-gray-500 p-2 rounded-lg text-white"
							onChange={handleLang}
						>
							{SUPPORTED_LANG.map((lang) => (
								<option
									key={lang.id}
									value={lang.id}
								>
									{lang.name}
								</option>
							))}
						</select>
					)}

					<button
						className="bg-emerald-700 rounded-lg w-24 text-white hover:bg-emerald-950"
						onClick={handleGPTView}
					>
						{gptToggleView ? "Home Page" : "GPT Search"}
					</button>
					<button
						onClick={handleSignout}
						className=" bg-red-700 text-white rounded-md w-20 p-1 hover:bg-red-950"
					>
						SignOut
					</button>
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
		</div>
	);
};

export default Browse;
