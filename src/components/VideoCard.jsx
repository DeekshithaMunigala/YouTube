import { BsThreeDotsVertical } from "react-icons/bs";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;

  return (
    <div className="flex flex-col lg:w-[372px] h-[330px] lg:m-4 md:m-4 md:w-[250px] sm:w-[250px] sm:h-[330px] sm:m-2">
      <img
        className="w-full rounded-xl lg:h-[210px] sm:h-[190px]"
        src={thumbnails.standard.url}
        alt="thumbnail"
      />
      <ul className="mt-1">
        <div className="flex items-start justify-between">
          <li className="font-bold mr-1">{title}</li>
          <li>
            <BsThreeDotsVertical className="mt-2" />
          </li>
        </div>
        <li className="text-gray-500 font-medium tracking-tight">
          {channelTitle}
        </li>
        <li className="text-gray-500 font-medium tracking-tight">
          {statistics.viewCount} views
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
