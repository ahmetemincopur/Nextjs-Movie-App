import React from 'react';
import Card from '@/components/Card';
import { getPopularMovies, getTrendingMovies } from '../../utils/requests';


const Page = async() => {

        const popularMovies = await getPopularMovies();
        const trendingMovies = await getTrendingMovies();
  return (
    <>
        <div className="flex mt-10 justify-center w-full">
            <h1 className="font-bold text-2xl text-start">Popular Movies</h1>
        </div>
        <div className="flex flex-row gap-10 mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl flex-wrap justify-center">
            {popularMovies.map(movie => (
            <Card key={movie.id} movie={movie} />
            ))}
        </div>

        <div className="flex mt-10 justify-center w-full">
            <h1 className="font-bold text-2xl text-start">Trend Movies</h1>
        </div>
         <div className="flex flex-row gap-10 mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl flex-wrap justify-center">
            {trendingMovies.map(movie => (
              <Card key={movie.id} movie={movie} />
              ))}
        </div>
    </>

  );
};

export default Page;
