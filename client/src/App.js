import { useEffect, useState } from 'react';
import './App.css';
import Video from './components/Video';
import VideoFooter from './components/VideoFooter';
import axois from "./components/axois";
function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
   async function fetchPosts(){
    const response = await axois.get("/video/posts")
    setVideos(response.data);
    return response;
   }

   fetchPosts()
  }, []);
  console.log(videos, 'youssef')

  return (
    // BEM
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description ,song, likes, messages, shares }) => (
            <Video
              url={url}
              channel ={channel}
              description ={description}
              song={song}
              likes={likes}
              messages={messages}
               shares={ shares}
            />
          )
        )}
      </div>
    </div>
  );
}
export default App;
