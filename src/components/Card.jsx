import React from "react";
import { fixNumber, getYear } from "../../utils/format.js";
const Card = ({ movie }) => {

  return (
    <a
      href={`/details/${movie.id}`}
      className="relative flex flex-col mt-6 text-gray-700 shadow-md bg-clip-border rounded-xl h-86
    whitespace-nowrap overflow-ellipsis transition-all align-text-top bg-white dark:bg-slate-800
    hover:scale-110 hover:whitespace-normal hover:text-left
    w-32 md:w-40 lg:w-48 xl:w-56
    items-center"
    >
      <div className="relative place-self-center w-28 md:w-36 lg:w-44 xl:w-52 justify-center mx-4 -mt-6 shadow-lg 
      bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <img
          className="relative"
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path || movie?.backdrop_path
            }`}
          alt="card-image"
        />
      </div>
      <div className="mt-3 mb-3 w-28
      md:w-40 md:h-10
      lg:w-48 lg:h-10
      xl:w-56 xl:h-14">
        <span
          className="font-sans text-center overflow-hidden antialiased font-semibold dark:text-white
          tracking-tight text-blue-gray-900
          align-text-left block text-ellipsis
          text-base md:text-lg lg:text-xl xl:text-2xl
          md:mb-2 md:mx-2
          lg:mb-2 lg:mx-2
          xl:mb-2 xl:mx-2" style={{ lineHeight: "1.3" }}
        >
          {movie.title}
        </span>
      </div>
      <div className="flex content-end justify-between w-28 opacity-50 mt-4 dark:text-white
      md:w-36 md:mb-2 md:mx-2
      lg:w-44 lg:mb-1 lg:mx-4
      xl:w-52 xl:mx-4 xl:mb-1">
        <span className="align-bottom font-extrabold text-xs md:text-xs lg:text-xs xl:text-xs
        ">{getYear(movie.release_date)}</span>
        <span className="align-bottom font-extrabold text-xs md:text-xs lg:text-xs xl:text-xs">{fixNumber(movie.vote_average)}</span>
      </div>
    </a>
  );
};

export default Card;
