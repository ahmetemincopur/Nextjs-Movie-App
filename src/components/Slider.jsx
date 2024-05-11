"use client"
import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function Slider({children: slidingCards}){
    const [current, setCurrent] = useState(0);

    console.log("Current value:", current);
    console.log(slidingCards.length-1)

    const prev =() => setCurrent((current=>current==0?0: current-1))
    const next =() => setCurrent((current=>current==3 ? 0: current+1))
    return (
        <div className="overflow-hidden relative">
            <div className="flex transition-transform ease-out duration-500" style={{transform: `translateX(-${current*100}%)`}}>{slidingCards}</div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                    <MdChevronLeft size={120}/>
                </button>
                <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                    <MdChevronRight size={120}/>
                </button>
            </div>

        </div>
    )
}