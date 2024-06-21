import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import useVideos from "../utils/useVideos";

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

  // const { snippet } = data[0];

  if (data[0].snippet == undefined) return <h1>Data Loading..</h1>;

  // const { title, description } = data[0].snippet;
  // console.log(title, description);
  console.log(data[0].snippet);
  // console.log(snippet);

  return (
    <div className="px-[60px] pt-2 flex">
      <iframe
        width="900"
        height="500"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        // frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // referrerpolicy="strict-origin-when-cross-origin"
        // allowfullscreen
      ></iframe>
      <div className="w-[450px] px-6 py-3 border border-black ml-4 rounded-lg">
        {/* <h1 className="font-semibold mb-2">{title}</h1> */}
        <div className="">
          <p>
            {/* {readMore ? description : `${description.substring(0, 100)}...`} */}
          </p>
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? `Show Less` : `Read More`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
