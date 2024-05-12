import React from "react";

const Card = ({ movie }) => {
  return (
    <a
      href={/*`/details/${movie.id}`*/ "/"}
      className="relative flex flex-col mt-6 text-gray-700 shadow-md bg-clip-border rounded-xl
    whitespace-nowrap overflow-ellipsis transition-all hover:scale-110 hover:whitespace-normal hover:text-balance w-28 md:w-32 lg:w-48
    items-center"
    >
      <div className="relative place-self-center w-24 md:w-32 lg:w-48 justify-center mx-4 -mt-6 text-white shadow-lg 
      bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <img
          className="relative"
          src={`https://image.tmdb.org/t/p/original/${
            movie?.poster_path || movie?.backdrop_path
          }`}
          alt="card-image"
        />
      </div>
      <div className="m-3 w-28 md:w-32 lg:w-48">
        <span
          className="block mb-2 font-sans text-center overflow-ellipsis overflow-hidden antialiased font-semibold leading-snug 
          tracking-normal text-blue-gray-900
          text-base md:text-lg lg:text-xl xl:text-2xl
          md:mb-2 md:mx-2
          lg:mb-4 lg:mx-2"
        >
          {movie.title}
        </span>
      </div>
      <div className="mx-1 flex mb-1 align-bottom justify-between w-28 
      md:w-32 md:mb-2 md:mx-2
      lg:w-48 lg:mb-4 lg:mx-4">
        <span className="align-bottom font-bold text-xs md:text-xs lg:text-sm xl:text-base">{movie.release_date}</span>
        <span className="align-bottom font-bold text-xs md:text-xs lg:text-sm xl:text-base">{movie.vote_average}</span>
      </div>
    </a>
  );
};

export default Card;
