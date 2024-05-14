"use client";

import React from "react";
import TimeAgo from "react-timeago";

export default function Tweet() {
  return (
    <div className="flex flex-col space-x-3 border-y p-5 border-gray-100">
      <div className="flex space-x-3">
        <picture>
          <img
            alt=""
            src="https://ew.com/thmb/GKkJ6M45ys5nBu9II7ooKPyiO64=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/billie-eilish-0bb935605c0c4e2fbaf45ea7f216c53b.jpg"
            className="h-11 w-11 rounded-full object-cover"
          />
        </picture>

        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1 font-bold">Jose Herrera</p>
            <p className="jidden text-sm text-gray-500 sm:inline">@joslu666</p>
            <TimeAgo className="text-sm text-gray-500" date="Aug 29, 2014" />
          </div>

          <p className="pt-1">
            Totalmente, nos fallaron, debieron controlar el clima.
          </p>

          {
            <picture>
              <img
                alt=""
                src="https://ew.com/thmb/GKkJ6M45ys5nBu9II7ooKPyiO64=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/billie-eilish-0bb935605c0c4e2fbaf45ea7f216c53b.jpg"
                className="m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm"
              />
            </picture>
          }
        </div>
      </div>
    </div>
  );
}
