"use client";

import React, { useState, useEffect } from "react";
import { handleGetData } from "./util/postTweet";
import ModalIcon from "./util/modalIcons";

import {
  MagnifyingGlassIcon,
  FaceSmileIcon,
  CalendarIcon,
  MapPinIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";

import Cookies from "js-cookie";

import { jwtDecode } from "jwt-decode";

interface User {
  image: string;
  name: string;
  nickname: string;
  id: string;
}

export default function TweetBox() {
  const [input, setInput] = useState<string>("");
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const userDocument = Cookies.get("user");

    if (userDocument) {
      try {
        const parsedUser: User = jwtDecode(userDocument);
        setUser(parsedUser);
      } catch (e) {
        alert(e);
      }
    }
  }, []);

  return (
    <div className="flex space-x-2 p-5">
      <picture>
        <img
          className="mt-4 h-14 w-14 rounded-full object-cover"
          src={user?.image}
          alt="user"
        />
      </picture>

      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input
            value={input}
            onChange={function change(e) {
              setInput(e.target.value);
            }}
            type="text"
            placeholder="What's happening?"
            className="h-24 w-full text-xl outline-none placeholder:text-xl"
          />

          <div className="flex items-center">
            <div className="flex flex-1 space-x-2 text-twitter">
              <ModalIcon Icon={PhotoIcon} title="PhotoIcon" />
              <MagnifyingGlassIcon className="h-5 w-5 cursor-pointer transition-transform ease-out hover:scale-150" />
              <FaceSmileIcon className="h-5 w-5 cursor-pointer transition-transform ease-out hover:scale-150" />
              <CalendarIcon className="h-5 w-5 cursor-pointer transition-transform ease-out hover:scale-150" />
              <MapPinIcon className="h-5 w-5 cursor-pointer transition-transform ease-out hover:scale-150" />
            </div>
            <button
              type="button"
              disabled={!input}
              onClick={() =>
                handleGetData({
                  user: user?.id,
                  description: input,
                  media:
                    "https://www.aceprensa.com/wp-content/uploads/2023/07/oppenheimer.jpg",
                })
              }
              className="rounded-full bg-twitter px-5 py-2 font-bold text-white">
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
