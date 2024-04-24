import React, { useState ,useEffect} from 'react'
import "./Feed.css";
import TweetBox from "./TweetBox.js";
import Post from "./Post.js";

export default function Feed() {
  const [posts, setPosts] = useState([]); // Array to store created posts

  const handleNewPost = (text, imageUrl) => {
    // Create a new post object with additional properties (if needed)
    const newPost = {
      text,
      imageUrl
    };
    setPosts([...posts, newPost]); // Update posts array with new post
  };

  return (
    <div className="feed">
      {/* header */}
      <div className="feed__header">
        <h2 >Home</h2>
      </div>
      {/* tweetbox */}
      <TweetBox onNewPost={handleNewPost}/>
      {/* post */}
      {/* <Post 
      // key={post.text}
      displayName='Elsa'
      username='Icequeen'
      verified={true}
      text='Stay Iced Stay Fresh'
      avatar='https://i.pinimg.com/564x/55/49/1a/55491a3aa608f5d1c13175e6185b897d.jpg'
      image='https://i.pinimg.com/474x/97/e3/53/97e353ccf58483ffb2f82558cc8096f3.jpg'/> */}
      {posts.map((post) => (
        <Post key={post.text} {...post} /> // Spread post object properties to Post
      ))}
      {/* post */}
      {/* post */}
      {/* post */}

    </div>
  )
}
