import React from "react";
import { Meteors } from "./ui/meteors";

export function MeteorsDemo() {
  return (
    <div className="pb-28 pt-10 hover:scale-110 transition">
      <button className="hover: scale-110">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className=" py-3 px-3 relative shadow-xl bg-gray-900 border-gray-800 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            {/* <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div> */}

            <h1 className="font-bold text-xl text-white  relative z-50">
              ดูผลงานทั้งหมด
            </h1>

            {/* 05 */}

            {/* Meaty part - Meteor effect */}
            <Meteors number={40} />
          </div>
      </button>
    </div>
  );
}
