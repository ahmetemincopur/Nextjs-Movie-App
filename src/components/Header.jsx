import React from 'react'

const Header = () => {
  return (
    <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
                <a className="text-lg font-bold text-gray-800" href="/">Movie App</a>
                <div className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                    <a className="text-lg font-bold text-gray-800" href="/">Home</a>
                    <a className="text-lg font-bold text-gray-800" href="/about">About</a>
                </div>
                <form className="flex">
                    <input className="rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" type="text" placeholder="Search" aria-label="Search" />
                    <button className="px-4 bg-blue-500 text-white font-semibold p-2 rounded-r-lg" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
  )
}

export default Header