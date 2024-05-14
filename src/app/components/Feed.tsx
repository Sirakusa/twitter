import React from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import TweetBox from "./TweetBox/TweetBox";
import TweetComponent from "./Tweet";

export default function Feed() {
  return (
    <div className="col-span-7 lg:col-span-5 border-x ml-11">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <ArrowPathIcon className="mr-5 mt-5 h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
      </div>

      <div>
        <TweetBox />
      </div>

      {/* LA PIEZA QUE ME FALTA (LOS TWEETS DE LAS PERSONAS) */}

      <div>
        <TweetComponent />
      </div>
    </div>
  );
}
