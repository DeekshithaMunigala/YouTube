// import { useEffect, useState } from "react";
// import { YOUTUBE_VIDEO_API } from "../utils/Contants";
import SideVideoCard from "./SideVideoCard";
import { Link } from "react-router-dom";
import useVideos from "../utils/useVideos";

const SideVideoContainer = () => {
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
    <div className="h-full flex flex-col w-full lg:px-[1%] sm:px-[2%] md:px-[10%] mt-2">
      {videos.length > 0 ? (
        videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <SideVideoCard info={video} />
          </Link>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default SideVideoContainer;
