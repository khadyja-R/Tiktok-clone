import React, { useRef, useState } from 'react';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
import './video.css';

const Video = ({url ,channel , description , song , likes, messages, shares }) => {
  const vedeoRef = useRef(null);
  const [playing,setPlaying] = useState(false);

  const handplayer = () =>{
   if(playing){
    vedeoRef.current.pause();
    setPlaying(false);
   }else{
    vedeoRef.current.play();
    setPlaying(true);
   }
  }
  return (
    <div className='video'>
      <video className='video_player' width="750" height="500" controls >
      <source src={url}/>
     </video>
     <VideoFooter channel={channel} description={description} song={song}/>
     <VideoSidebar  likes={likes}  messages={messages} shares={shares}/>
    </div>
  )
}
export default Video;