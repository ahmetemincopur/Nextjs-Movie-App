"use client";
import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function Slider({ children: Cards }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current) => (current == 0 ? 0 : current - 1));
  const next = () => setCurrent((current) => (current == 3 ? 0 : current + 1));
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500 ml-10"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {Cards}
      </div>
      <div className="flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="absolute inset-y-0 left-0 ml-5 mt-32 mb-32 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white content-center items-center"
        >
          <MdChevronLeft size={44} className="items-center" />
        </button>
        <button
          onClick={next}
          className="absolute inset-y-0 right-0 mr-5 mt-32 mb-32 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white content-center"
        >
          <MdChevronRight size={44} className="items-center" />
        </button>
      </div>
    </div>
  );
}
