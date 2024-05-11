import React from 'react';
import Card from '@/components/Card';
import { getPopularMovies, getTrendingMovies } from '../../utils/requests';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Slider from '@/components/Slider';

const Page = async() => {

        const popularMovies = await getPopularMovies();
        const trendingMovies = await getTrendingMovies();

  return (
    <>
            {/* Popular Movies Added */}
        <div className="flex mt-10 justify-center w-full">
            <h1 className="font-bold text-2xl text-start">Popular Movies</h1>
        </div>
        <Slider slidingCards={{popularMovies}}>
            <div className="whitespace-wrap scroll-smooth bg-white  w-full h-full">
                <div className="flex flex-row gap-10 m-6 text-gray-700 shadow-md bg-clip-border rounded-xl justify-start align-middle">
                    {popularMovies.map(movie => (
                    <Card key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </Slider>
            {/* Trending Movies Added */}
        <div className="flex mt-10 justify-center w-full">
            <h1 className="font-bold text-2xl text-start">Trend Movies</h1>
        </div>
        <Slider slidingCards={{trendingMovies}}>
            <div className="whitespace-wrap scroll-smooth bg-white  w-full h-full">
                <div className="flex flex-row gap-10 m-6 text-gray-700 shadow-md bg-clip-border rounded-xl justify-start align-middle">
                    {trendingMovies.map(movie => (
                    <Card key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </Slider>

</>
  );
};

export default Page;
