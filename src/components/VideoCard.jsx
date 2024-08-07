import { BsThreeDotsVertical } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import { formatDistanceToNow } from "date-fns";

const formatViewsCount = (count) => {
  if (count > 1000000) {
    return (count / 1000000).toFixed(1) + "M";
  } else if (count >= 1000) {
    return (count / 1000).toFixed(1) + "K";
  } else {
    return count.toString();
  }
};

const formateDate = (dateString) => {
  const date = new Date(dateString);
  return formatDistanceToNow(date, { addSuffix: true }).replace("about", "");
};

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails, publishedAt } = snippet;

  return (
    <div className="flex flex-col lg:w-[372px] h-[330px] lg:m-4 md:m-4 md:w-[250px] sm:w-[250px] sm:h-[330px] sm:m-2">
      <img
        className="w-full rounded-xl lg:h-[210px] sm:h-[190px]"
        src={thumbnails.standard.url}
        alt="thumbnail"
      />
      <ul className="mt-1 px-1">
        <div className="flex items-start justify-between">
          <li className="font-bold mr-1">{title}</li>
          <li>
            <BsThreeDotsVertical className="mt-2" />
          </li>
        </div>
        <li className="text-gray-500 font-medium tracking-tight">
          {channelTitle}
        </li>
        <li className="text-gray-500 font-medium tracking-tight flex items-center">
          {formatViewsCount(statistics.viewCount)} views
          <div className="flex items-center ml-1">
            <BsDot /> {formateDate(publishedAt)}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
