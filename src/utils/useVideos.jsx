import { useState, useEffect } from "react";
import { YOUTUBE_VIDEO_API } from "./Contants";

const useVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEO_API);
    const data = await response.json();
    // console.log(data.items);
    setVideos(data.items);
  };
  return videos;
};

export default useVideos;
