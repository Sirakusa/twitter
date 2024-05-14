import React from "react";

import { HomeIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/outline";
import { HashtagIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { QueueListIcon } from "@heroicons/react/16/solid";
import { UserIcon } from "@heroicons/react/16/solid";
import { InboxIcon } from "@heroicons/react/24/outline";

import SideBarRow from "./SidebarRows";

export default function SideBar() {
  return (
    <div className="cols-span-2 flex flex-col px-4 items-center md:items-start mr-5">
      <picture>
        <img
          className="m-3 h-5 w-5"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"
          alt="twitter"
        />
      </picture>

      <SideBarRow Icon={HomeIcon} title="Home" />
      <SideBarRow Icon={HashtagIcon} title="Explore" />
      <SideBarRow Icon={BellIcon} title="Notifications" />
      <SideBarRow Icon={InboxIcon} title="Messages" />
      <SideBarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SideBarRow Icon={UserIcon} title="Sign in" />
      <SideBarRow Icon={QueueListIcon} title="List" />
    </div>
  );
}
