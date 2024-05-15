"use client"
import React from 'react'
import YouTube from "react-youtube";

const Video = ({ videoKey }) => {
    return (
        <div className="relative bg-black w-[60]">
            <div className="container relative w-full overflow-hidden pt-[59.25%]">
                <YouTube videoId={videoKey} iframeClassName="absolute inset-0 w-full h-full border-none" />
            </div>
        </div>


    )
}

export default Video