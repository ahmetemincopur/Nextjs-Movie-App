import React from 'react'

const Card = ({movie}) => {
  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-1/6 min-w-64">
  <div
    className="relative max-h-fit mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <img
      src={`https://image.tmdb.org/t/p/original/${ movie?.poster_path || movie?.backdrop_path}`}
      alt="card-image" />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      <span>{movie.title}</span>
    </h5>
    <div className="p-6 flex justify-between items-center">
        <span>{movie.release_date}</span>
        <span>{movie.vote_average}</span>
    </div>
  </div>
</div>
  )
}

export default Card