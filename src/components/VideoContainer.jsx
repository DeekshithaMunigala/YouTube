// import { useEffect, useState } from "react";
// import { YOUTUBE_VIDEO_API } from "../utils/Contants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import useVideos from "../utils/useVideos";

const VideoContainer = () => {
  const videos = useVideos();

  // const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   getVideos();
  // }, []);

  // const getVideos = async () => {
  //   const response = await fetch(YOUTUBE_VIDEO_API);
  //   const data = await response.json();
  //   // console.log(data.items);
  //   setVideos(data.items);
  // };

  return (
    <div className="h-full flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
