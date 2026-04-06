import React from "react";

function Card({aman, textme = "visit me"}) {
    console.log(aman)
  return (
    <div>
      <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl border-2 m-5">
        <div>
          <img
            class="size-48 shadow-xl rounded-md"
            alt=""
            src="./src/images/pexel.jpg"
          />
        </div>
        <div class="flex items-center md:items-start">
          <span class="text-2xl font-medium">Class {aman}</span>
          <span class="font-medium text-sky-500">The Anti-Patterns</span>
          <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
        <button className="bg-blue-500 text-white rounded p-4 ">{textme}</button>
      </div>
    </div>
  );
}

export default Card;
