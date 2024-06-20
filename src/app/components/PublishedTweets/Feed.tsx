"use client";

import React from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import TweetBox from "../TweetBox/TweetBox";
import { TweetComponent } from "./Tweet";
import InfiniteScroll from "react-infinite-scroll-component";
import { TweetState, TweetData } from "./utils/types.get";

export default class Feed extends React.Component<{}, TweetState> {
  constructor(props: any) {
    super(props);

    this.state = {
      tweetData: [],
      count: 0,
    };

    this.fetchMoreData = this.fetchMoreData.bind(this);
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:5000/tweet");
    const data: TweetData[] = await response.json();
    this.setState({ tweetData: data });
  }

  fetchMoreData() {
    this.setState(
      (prevState) => ({ count: prevState.count + 1 }),
      async () => {
        // Using the updated count value to fetch data
        const response = await fetch(
          `http://localhost:5000/tweet?skip=${encodeURIComponent(
            this.state.count
          )}`
        );
        const data: TweetData[] = await response.json();
        this.setState((prevState) => ({
          tweetData: prevState.tweetData
            ? prevState.tweetData.concat(data)
            : data,
        }));
      }
    );
  }

  render() {
    const { tweetData } = this.state;

    if (!tweetData) {
      return <div>Cargando...</div>;
    }

    return (
      <div className="col-span-7 lg:col-span-5 border-x ml-11">
        <div className="flex items-center justify-between">
          <h1 className="p-5 pb-0 text-xl font-bold">Inicio</h1>
          <ArrowPathIcon className="mr-5 mt-5 h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
        </div>

        <div>
          <TweetBox />
        </div>

        <div>
          <InfiniteScroll
            dataLength={tweetData.length}
            next={this.fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}>
            {tweetData.map((tweet) => (
              <TweetComponent key={tweet._id} post={tweet} />
            ))}
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}
