"use client";

import React from "react";
import TimeAgo from "react-timeago";

import {
  ChatBubbleLeftRightIcon,
  ArrowsRightLeftIcon,
  HeartIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";
import { TweetData } from "./utils/types.get";

interface PostProps {
  post: TweetData;
}

export const TweetComponent: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="flex flex-col space-x-3 border-y p-5 border-gray-100">
      <div className="flex space-x-3">
        <picture>
          <img
            alt=""
            src={post.user.image.url}
            className="h-11 w-11 rounded-full object-cover"
          />
        </picture>

        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1 font-bold">{post.user.name}</p>
            <div className="flex items-center space-x-10">
              <p className="hidden text-sm text-gray-500 sm:inline">
                @{post.user.nickname}
              </p>
              <TimeAgo className="text-sm text-gray-500" date={post.createAt} />
            </div>
          </div>

          <p className="pt-1">{post.description}</p>

          {post.media.url && (
            <picture>
              <img
                alt=""
                src={post.media.url}
                className="m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm"
              />
            </picture>
          )}
        </div>
      </div>

      <div className="mt-5 flex justify-between">
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <ChatBubbleLeftRightIcon className="h-5 w-5" />
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <ArrowsRightLeftIcon className="h-5 w-5" />
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <HeartIcon className="h-5 w-5" />
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <ArrowUpTrayIcon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};
