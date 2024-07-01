import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  
	return (
        <div className="mb-10">
            <h1 className="text-3xl font-bold text-white mx-4 mb-5">{title}</h1>
            <div className="flex overflow-x-scroll no-scrollbar mx-4">
			{movies && movies.length > 0 && (
                <div className="flex gap-2">
					{movies.map((movie) => (
                        <MovieCard key={movie.id} poster={movie?.poster_path} />
					))}
				</div>
			)}
        </div>
        </div>
	);
};

export default MovieList;
