import React from 'react';
import {FaMusic} from "react-icons/fa";
import Ticker from 'react-ticker';
import {GrDisc} from "react-icons/gr";
import './VideoFooter.css';

const VideoFooter = ({channel , description , song}) => {
  return (
    <div className='container_footer'>
    <div className="videofootertext">

        <h3>{channel}</h3>

        <p>{description}</p>

        <div className="video-icons">
            <FaMusic className='video_icon'></FaMusic>
     <Ticker mode="smooth">
        {({ index }) => (
            <>
                <p>{song}</p>
            </>
        )}
    </Ticker>
        </div>
    </div>
    <img
        className="videoFooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  )
}

export default VideoFooter