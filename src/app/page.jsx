import React from "react";
import Card from "@/components/Card";
import { getPopularMovies, getTrendingMovies } from "../../utils/requests";
import Slider from "@/components/Slider";

const Page = async () => {
  const popularMovies = await getPopularMovies();
  const trendingMovies = await getTrendingMovies();

  return (
    <div className="h-fit">
      {/* Popular Movies Added */}
      <div className="h-full">
        <div className="flex mt-10 justify-center w-full">
          <h1 className="font-bold text-2xl text-start">
            Popular Movies
          </h1>
        </div>
        <Slider>
          <div className="whitespace-nowrap scroll-smooth bg-white  w-full h-full block">
            <div className="flex flex-row gap-10 m-6 bg-clip-border rounded-xl justify-start align-middle">
              {popularMovies.map((movie) => (
                <Card key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </Slider>
      </div>

      {/* Trending Movies Added */}
      <div className="flex mt-10 justify-center w-full bg-white">
        <h1 className="font-bold text-2xl text-start">Trend Movies</h1>
      </div>
      <Slider slidingCards={{ trendingMovies }}>
        <div className="whitespace-wrap scroll-smooth bg-white  w-full h-full">
          <div className="flex flex-row gap-10 m-6 bg-clip-border rounded-xl justify-start align-middle">
            {trendingMovies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Page;
