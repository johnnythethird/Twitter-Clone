import "./Feed.css";

import Post from "./Post/Post";
import TweetBox from "./TweetBox/TweetBox";

const Feed = () => {
  return (
    <div className="feed">
      <header className="feed_header">
        <h2>Home</h2>
      </header>
      <TweetBox />
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default Feed