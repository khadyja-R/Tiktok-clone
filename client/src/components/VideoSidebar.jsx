import React, { useState } from "react";
import {BsShare} from "react-icons/bs";
import {GrFavorite} from "react-icons/gr";
import {TbMessageCircle} from "react-icons/tb";
import "./VideoSidebar.css";


function VideoSidebar({ likes,messages, shares}) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <GrFavorite  fontSize="large" onClick={(e) => setLiked(false)} />
        ) : (
          <GrFavorite
            fontSize="large"
            onClick={(e) => setLiked(true)}
          />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__button">
        <TbMessageCircle fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        <BsShare fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
