import React from 'react'
import './Post.css'
import {Avatar} from "@material-ui/core"
import AcUnitIcon from '@mui/icons-material/AcUnit';
// import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
// import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import PublishIcon from "@material-ui/icons/Publish";

function Post({text, image}) {
  return (
    <div className='post'>
        <div className='post__avatar'>
            <Avatar src="https://i.pinimg.com/564x/55/49/1a/55491a3aa608f5d1c13175e6185b897d.jpg"/>
        </div>
        <div className="post__body"> 
            <div className='post__header'>
                <div className="post__headerText">
                    <h3>
                        "Elsa"{" "}
                        <span>
                           <AcUnitIcon className="host__badge"/>
                        </span>
                    </h3>
                </div>
                <div className='post__headerDescription'>
                    <p>{text}</p>
                </div>
            </div>
            {/* <img src={image} alt='{image}'/> */}
        </div>
        <div className='post__footer'>
            <FavoriteBorderIcon fontSize="small" />
        </div>
    </div>
  )
}

export default Post
