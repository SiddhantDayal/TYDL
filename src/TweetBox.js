import React, {useState} from 'react';
import "./TweetBox.css";
import {Avatar , Button} from "@material-ui/core";

function TweetBox({ onNewPost }) {
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleInputChange = (event) => {
    if (event.target.name === 'text') {
      setText(event.target.value);
    } else if (event.target.name === 'imageUrl') {
      setImageUrl(event.target.value);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    // setText('');
    // setImageUrl('');
    if (text.trim()) { // Check if there's actual text entered
      onNewPost(text, imageUrl); // Call the callback function with user input
      setText(''); // Clear the input fields after successful submission
      setImageUrl('');
    }
  };
  return (
    <div className="tweetBox">
      <form onSubmit={handleSubmit}>
        <div className="tweetBox__Input">
            <Avatar src="https://i.pinimg.com/564x/55/49/1a/55491a3aa608f5d1c13175e6185b897d.jpg"/>
            <input name = 'text' placeholder="What's Happening" type='text' onChange={handleInputChange}/>
        </div>
        {/* <input name="imageUrl" className="tweetBox_InputImage" placeholder="Optional: Enter image url" type='text' onChange={handleInputChange} /> */}
        <Button className='tweetBox__tweetButton' type="submit">blog</Button>
      </form>
    </div>
  )
}

export default TweetBox
