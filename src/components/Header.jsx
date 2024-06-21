import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdVideoCall } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import youtubeLogo from "../assets/Youtube_logo.png";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { search_api } from "../utils/Contants";
import { useEffect, useState } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const response = await fetch(search_api + searchQuery);
    const data = await response.json();
    setSuggestions(data[1]);
    // console.log(data[1]);
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      <nav className="flex justify-between items-center sticky top-0 shadow-lg pt-1 pb-2 z-20 w-full bg-[#ffffff] pl-3">
        <div className="flex items-center relative ">
          <button className="p-2">
            <RxHamburgerMenu
              className="h-[24px] w-[24px] cursor-pointer"
              onClick={() => toggleMenuHandler()}
            />
          </button>

          <img
            className="h-[48px] w-[60px] p-2"
            src={youtubeLogo}
            alt="Youtube logo"
          />

          <h1 className="font-bold text-xl tracking-tighter ">YouTube</h1>
          <span className="uppercase absolute top-0 -right-4 text-xs">in</span>
        </div>

        <div className=" h-10 lg:w-[640px] sm:w-[280px]">
          <div className="flex items-center">
            <input
              className="lg:w-[600px] h-10 outline-none border border-gray-400 p-2 pl-4 rounded-l-full border-r-0 sm:w-[240px]"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setShowSuggestion(false)}
            />
            <div className="w-16 h-10 border bg-gray-100 border-gray-500 flex justify-center items-center rounded-r-full">
              <CiSearch className="w-6 h-6 mx-auto cursor-pointer" />
            </div>
          </div>
          {showSuggestion && (
            <div className="fixed py-3 bg-white lg:w-[600px] sm:w-[240px] rounded-lg border border-gray-100">
              <ul>
                {suggestions.map((each) => (
                  <li
                    key={each}
                    className="flex px-8 py-2 shadow-sm hover:bg-gray-100"
                  >
                    <CiSearch className="w-6 h-6 mr-3 cursor-pointer" /> {each}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex justify-evenly items-center w-[200px]">
          <MdVideoCall className="w-9 h-9" />
          <IoMdNotifications className="w-8 h-8" />
          <img
            className="w-8 h-8 text-center my-auto rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
            alt=""
          />
        </div>
      </nav>
    </>
  );
};

export default Header;
