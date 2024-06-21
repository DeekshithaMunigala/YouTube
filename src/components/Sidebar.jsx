import { BiSolidHome } from "react-icons/bi";
import { RiVideoFill } from "react-icons/ri";
import { MdSubscriptions } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { LiaDownloadSolid } from "react-icons/lia";
import { LuHistory } from "react-icons/lu";
import { RiVideoLine } from "react-icons/ri";
import { CgPlayList } from "react-icons/cg";
import { BsPersonVideo } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";

import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // console.log(isMenuOpen);

  const location = useLocation();
  const isWatchPage = location.pathname === "/watch";

  if (isWatchPage && !isMenuOpen) {
    return null;
  }

  if (!isMenuOpen)
    return (
      <ul className="w-[100px] h-full text-center bg-[#ffffff] fixed left-0 z-20 px-2">
        <li className="flex flex-col py-5 rounded-md hover:bg-gray-200 ">
          <BiSolidHome className="mx-auto text-2xl" />
          <span className="font-medium text-xs mt-1">
            <Link to="/">Home</Link>
          </span>
        </li>

        <li className="flex flex-col py-5 rounded-md hover:bg-gray-200">
          <RiVideoFill className=" text-2xl mx-auto" />
          <span className="font-medium text-xs mt-1">Shorts</span>
        </li>

        <li className="flex flex-col py-5 rounded-md hover:bg-gray-200">
          <MdSubscriptions className=" text-2xl mx-auto" />
          <span className="font-medium text-xs mt-1">Subscription</span>
        </li>

        <li className="flex flex-col py-5 rounded-md hover:bg-gray-200">
          <MdVideoLibrary className=" text-2xl mx-auto" />
          <span className="font-medium text-xs mt-1">You</span>
        </li>

        <li className="flex flex-col py-5 rounded-md hover:bg-gray-200">
          <LiaDownloadSolid className=" text-2xl mx-auto" />
          <span className="font-medium text-xs mt-1">Downloads</span>
        </li>
      </ul>
    );

  return (
    <div className="w-[200px] px-2 bg-[#ffffff] h-full fixed left-0 z-20">
      <ul>
        <li className="flex items-center mb-2 py-1 rounded-md pl-3 hover:bg-gray-200 ">
          <BiSolidHome className="mr-5 text-xl" />
          <span className="font-medium">
            <Link to="/">Home</Link>
          </span>
        </li>

        <li className="flex items-center mb-2 py-1 rounded-md pl-3 hover:bg-gray-200">
          <RiVideoFill className="mr-5 text-xl" />
          <span className="font-medium">Shorts</span>
        </li>

        <li className="flex items-center mb-2 py-1 rounded-md pl-3 hover:bg-gray-200">
          <MdSubscriptions className="mr-5 text-xl" />
          <span className="font-medium">Subscriptions</span>
        </li>

        <li className="flex flex-col mb-2">
          <div className="flex items-center mb-1 py-1 pl-3 rounded-md hover:bg-gray-200 ">
            <span className="font-bold mr-1 ">You</span>
            <IoIosArrowForward className="text-lg" />
          </div>
          <ul>
            <li className="flex items-center mb-1 py-1 rounded-md pl-3 hover:bg-gray-200">
              <BsPersonVideo className="mr-5 text-xl" />
              <span>Your Channel</span>
            </li>

            <li className="flex items-center mb-1 py-1 rounded-md pl-3 hover:bg-gray-200">
              <LuHistory className="mr-5 text-xl" />
              <span>History</span>
            </li>

            <li className="flex items-center mb-1 py-1 rounded-md pl-3 hover:bg-gray-200">
              <CgPlayList className="mr-5 text-xl" />
              <span>Playlists</span>
            </li>

            <li className="flex items-center mb-1 py-1 rounded-md pl-3 hover:bg-gray-200">
              <RiVideoLine className="mr-5 text-xl" />
              <span>Your Videos</span>
            </li>

            <li className="flex items-center mb-1 py-1 rounded-md pl-3 hover:bg-gray-200">
              <MdOutlineWatchLater className="mr-5 text-xl" />
              <span>Watch Later</span>
            </li>

            <li className="flex items-center mb-1 py-1 rounded-md pl-3 hover:bg-gray-200">
              <AiOutlineLike className="mr-5 text-xl" />
              <span>Liked Videos</span>
            </li>

            <li className="flex items-center mb-1 py-1 rounded-md pl-3 hover:bg-gray-200">
              <LiaDownloadSolid className="mr-5 text-xl" />
              <span>Downloads</span>
            </li>
          </ul>
        </li>

        <li className="flex flex-col mb-2">
          <div className="flex items-center mb-1 py-1 pl-3 rounded-md hover:bg-gray-200 ">
            <span className="font-bold">Subscriptions</span>
          </div>
          <ul>
            <li className=" pl-3 py-1 mb-1 rounded-md hover:bg-gray-200">
              CodeWithHarry
            </li>
            <li className=" pl-3 py-1 mb-1 rounded-md hover:bg-gray-200">
              CodeWithHarshad
            </li>
            <li className=" pl-3 py-1 mb-1 rounded-md hover:bg-gray-200">
              Apna College
            </li>
            <li className=" pl-3 py-1 mb-1 rounded-md hover:bg-gray-200">
              BangtanTv
            </li>
            <li className=" pl-3 py-1 mb-1 rounded-md hover:bg-gray-200">
              Striver
            </li>
            <li className=" pl-3 py-1 mb-1 rounded-md hover:bg-gray-200">
              Syntax Sarcasm
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
