interface Media {
  _id: string;
  url: string;
  __v: number;
}

interface User {
  _id: string;
  name: string;
  nickname: string;
  joined: string;
  __v: number;
  access: string;
  image: Media;
}

export interface TweetData {
  _id: string;
  description: string;
  createAt: string;
  __v: number;
  media: Media;
  user: User;
}

export interface TweetState {
  tweetData: TweetData[];
  count: number;
}
