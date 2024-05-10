import React from 'react';
import Card from '@/components/Card';

const API_KEY = process.env.API_KEY;

const Page = async() => {


        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,{next:{revalidate: 10000}});
        if(!res.ok){
            throw new Error('Failed to fetch data')
        }
        const data = await res.json();
        const results = data.results;
  return (
    <>
        <div className="flex mt-10 justify-center w-full">
        <h1 className="font-bold text-2xl text-start">Popular Movies</h1>
        </div>
           
            <div className="flex flex-row gap-10 mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl flex-wrap justify-center">
                {results.map(movie => (
                <Card key={movie.id} movie={movie} />
                ))}
            </div>

    </>

  );
};

export default Page;
