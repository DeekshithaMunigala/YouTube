import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import useVideos from "../utils/useVideos";
import CommentsContainer from "./CommentsContainer";
import SideVideoContainer from "./SideVideoContainer";

const WatchPage = () => {
  const [readMore, setReadMore] = useState(false);
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  const videos = useVideos();

  const data = videos.filter((each) => each.id === searchParams.get("v"));

  if (!data.length) {
    return <h1>Loading...</h1>;
  }

  const { title, description } = data[0].snippet;

  return (
    <div className="flex lg:flex-row sm:flex-col">
      <div className="lg:px-[60px] pt-2 sm:px-[2%] md:px-[10%]">
        <iframe
          className="lg:w-[900px] lg:h-[500px] sm:w-[700px] sm:h-[400px] rounded-xl"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>

        <div className="py-3 mt-2 rounded-lg lg:w-[900px] ">
          <h1 className="font-bold mb-2 text-xl">{title}</h1>
          <div className="bg-gray-100 border border-gray-50 rounded-md p-3 text-gray-600 font-semibold">
            <p>
              {readMore ? description : `${description.substring(0, 100)}...`}
            </p>
            <button
              className="text-blue-400 tracking-wide"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? `Show Less` : `Read More`}
            </button>
          </div>
        </div>
        <CommentsContainer className="lg:w-[900px]" />
      </div>
      <SideVideoContainer />
    </div>
  );
};

export default WatchPage;
