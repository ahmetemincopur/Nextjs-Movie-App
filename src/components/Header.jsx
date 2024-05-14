import React from 'react'

const Header = () => {
  return (
    <nav className="w-full sticky top-0 z-50
    text-base md:text-base lg:text-lg xl:text-xl 
    sm:top-0 md:top-0 lg:top-1 xl:top-2">
        <div className="container mx-auto w-full px-4 rounded-xl shadow-lg bg-white
        sm:w-full
        md:w-full
        lg:my-2 lg:w-[80%]
        xl:my-2.5 xl:w-[80%]">
            <div className="flex justify-between items-center py-2
            md:py-2
            lg:py-3
            xl:py-3">
                <a className="font-bold text-gray-800" href="/">Movie App</a>
                <div className="flex gap-2 items-center lg:mb-0 lg:mt-0 lg:flex-row lg:gap-6">
                    <a className="font-bold text-gray-800 invisible px-4 border-b-4 border-t-4 hover:border-b-black border-transparent
                    md:visible lg:visible" href="/">Home</a>
                    <a className="font-bold text-gray-800 invisible px-4 border-b-4 border-t-4 hover:border-b-black border-transparent
                    md:visible lg:visible" href="/about">About</a>
                </div>
                <form className="flex h-8 items-center
                sm:h-8
                md:h-8
                lg:h-8
                xl:h-8">
                    <input className="rounded-l-lg p-1.5 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white w-32
                    hover:border-gray-300 focus:border-none
                    sm:w-32 sm:p-1.5
                    md:w-40 md:p-1.5
                    lg:w-48 lg:p-2
                    xl:w-56
                    text-xs md:text-sm lg:text-sm xl:text-sm" type="text" placeholder="Search Movie" aria-label="Search" />
                    <button className=" bg-blue-500 text-white font-semibold p-1.5 rounded-r-lg w-16
                    hover:bg-blue-600 active:bg-blue-800
                    sm:w-16 sm:p-1.5
                    md:w-16 md:p-1.5
                    lg:w-20 lg:p-2
                    xl:w-20
                    text-xs md:text-sm lg:text-sm xl:text-sm" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
  )
}

export default Header