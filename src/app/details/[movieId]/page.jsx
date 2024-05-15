import React from "react";
import { getMovieCredits, getMovieDetails, getMovieVideos } from "../../../../utils/requests";
import { fixNumber, findDirector, getYear } from "../../../../utils/format.js";
import Video from "@/components/Video";


const page = async ({ params }) => {
    const id = params.movieId;
    const details = await getMovieDetails(id);
    const credits = await getMovieCredits(id);
    const director = findDirector(credits.crew);
    const genres = details.genres.map(genre => genre.name).join(", ");
    const videos = await getMovieVideos(id);

    return (
        <div className="flex container h-full bg-slate-50 text-gray-800 mx-auto my-auto dark:bg-slate-800 dark:text-white">
            <div className="relative">
                <div className="flex w-full justify-center
                bg-clip-border rounded-xl bg-blue-gray-500">
                    <img
                        className=" w-[80%] rounded-xl shadow-lg"
                        src={`https://image.tmdb.org/t/p/original/${details?.backdrop_path
                            }`}
                        alt="card-image"
                    />
                </div>
                <div className="flex w-full justify-center flex-row
                md:flex-row">
                    <div className="relative w-[60%] content-start m-[2%]
                    md:m-[1%]">
                        <div className="w-auto m-[2%]">
                            <h1 className="mt-[2%] text-start text-base md:text-lg lg:text-xl xl:text-2xl font-bold">{details.title}</h1>
                            <h2 className="mb-[2%] text-start text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">Director: {director}</h2>
                            <p className="text-base md:text-lg lg:text-xl xl:text-2xl">{details.overview}</p>
                        </div>
                    </div>
                    <div className=" w-[30%] m-[2%] flex
                    md:m-[1%]">
                        <div className="flex w-[100%] justify-center">
                            <img
                                className="w-[100%] rounded-xl shadow-lg items-center"
                                src={`https://image.tmdb.org/t/p/original/${details?.poster_path
                                    }`}
                                alt="card-image"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex w-full my-[2%] flex-row items-center">
                    <div className="relative w-[60%] m-[2%]">
                        <Video videoKey={videos[0].key} />
                    </div>
                    <div className="relative w-[40%] my-[2%]">

                        <div className="m-[2%]">
                            <span className="block font-bold
                            text-sm 
                            sm:text-sm
                            md:text-base
                            lg:text-lg
                            xl:text-lg">{details.title}</span>
                            <span className="block font-semibold
                             text-sm 
                             sm:text-sm
                             md:text-base
                             lg:text-lg
                             xl:text-lg">{genres}</span>
                            <span className="block font-semibold
                             text-sm 
                             sm:text-sm
                             md:text-base
                             lg:text-lg
                             xl:text-lg">IMDB: {fixNumber(details.vote_average)}</span>
                        </div>
                        <div className=" relative m-[2%]">
                            <h1 className="block font-semibold m-[2%]
                             text-sm 
                             sm:text-sm
                             md:text-base
                             lg:text-lg
                             xl:text-lg">Details</h1>
                            <div className="flex m-[2%]">
                                <table className="table-auto border-collapse border border-gray-300 rounded-lg
                                text-sm 
                                sm:text-sm
                                md:text-base
                                lg:text-lg
                                xl:text-lg
                                sm:py-1 md:py-1">
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2
                                            sm:py-1 md:py-1">Genres:</td>
                                            <td className="border border-gray-300 px-4 py-2
                                            sm:py-1 md:py-1">{genres}</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Release Date:</td>
                                            <td className="border border-gray-300 px-4 py-2">{getYear(details.release_date)}</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Runtime:</td>
                                            <td className="border border-gray-300 px-4 py-2">{details.runtime}</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Status:</td>
                                            <td className="border border-gray-300 px-4 py-2">{details.status}</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Original Language:</td>
                                            <td className="border border-gray-300 px-4 py-2">{details.original_language}</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Budget:</td>
                                            <td className="border border-gray-300 px-4 py-2">${details.budget}</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Revenue:</td>
                                            <td className="border border-gray-300 px-4 py-2">${details.revenue}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>




            </div>
        </div>
    );
};

export default page;
