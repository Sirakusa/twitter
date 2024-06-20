"use client";

import SideBar from "../components/Sidebar";
import Feed from "../components/PublishedTweets/Feed";
import Widgets from "../components/widgets";

const Wall = () => {
  return (
    <div className="lg:max-w-7xl grid grid-cols-9 mx-auto max-h-screen">
      <SideBar />
      <Feed />
      <Widgets />
    </div>
  );
};

export default Wall;
