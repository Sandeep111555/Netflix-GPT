import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  
	return (
        <div className="mb-10 md:p-1 pt-8">
            <h1 className="md:text-3xl text-xl font-bold text-white mx-4 md:mb-5 mb-3">{title}</h1>
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
