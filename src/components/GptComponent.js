import React, { useRef } from "react";
import { API_OPTIONS, LOGIN_BODY_IMG } from "../utils/Constaints";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import groq from "../utils/Groq";
import { addGptMovies } from "../utils/gptSlice";
import MovieSuggestions from "./MovieSuggestions";


const GptComponent = () => {
	const langKey = useSelector((store) => store.config.lang);
	const searchText = useRef("null");
    const dispatch = useDispatch();

	const getGptMovieDetails = async (movie) => {
		const data = await fetch(
			"https://api.themoviedb.org/3/search/movie?query="+
            movie
            +"&include_adult=false&language=en-US&page=1",
			API_OPTIONS
		);
		const jsonData = await data.json();
		return jsonData;
	};
	const handleSearch = async () => {
		const query =
			"Act like a movie recommendation application for the ahead query: " +
			searchText.current.value +
			" give results comma separated and give first 10 movies only. Give just the result like the example ahead dont add any other sentences. Example Results: Sholay, Hera Pheri, Golmal, Kalki, Veer";
		const results = await groq.chat.completions.create({
			messages: [{ role: "user", content: query }],
			model: "llama3-8b-8192",
		});
		const movieArray = results.choices?.[0].message?.content.split(",");

		const promiseArray = movieArray.map((movie) =>
			getGptMovieDetails(movie.trim())
		);

		const tmdbResults = await Promise.all(promiseArray);
		dispatch(addGptMovies({movieNames: movieArray, movieResults: tmdbResults}))
	};
	return (
        <>
        	<div className=" fixed w-screen">
				<img
					src={LOGIN_BODY_IMG}
					className="brightness-50"
					alt="body_image"
				/>
			</div>
		<div className="flex w-screen h-screen justify-center items-center">
			<div className="absolute z-10 -mt-80">
				<form onSubmit={(e) => e.preventDefault()}>
					<input
						ref={searchText}
						type="text"
						className="w-96 h-14 rounded-lg bg-gray-500 text-white placeholder:text-white text-center"
						placeholder={lang[langKey].gptSearchPlaceHolder}
					/>
					<button
						type="submit"
						className="bg-red-500 w-24 h-14 rounded-lg m-2 hover:opacity-90 text-white"
						onClick={handleSearch}
					>
						{lang[langKey].search}
					</button>
				</form>
			</div>
		</div>
        <div className="relative -mt-96 p-5">
                <MovieSuggestions/>
        </div>
        </>
	);
};

export default GptComponent;
