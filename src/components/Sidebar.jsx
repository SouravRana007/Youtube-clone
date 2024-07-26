import { TiHome } from "react-icons/ti";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { PiFilmSlateLight } from "react-icons/pi";
import { TbRadioactiveFilled } from "react-icons/tb";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { CiTrophy } from "react-icons/ci";
import { GoLightBulb } from "react-icons/go";
import { SiStylelint } from "react-icons/si";
import { MdOutlineCellTower } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";

function Sidebar() {
  const SidebarItems = [
    {
      id: 1,
      name: "Home",
      icon: <TiHome />,
    },
    {
      id: 1,
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    { id: 3, name: "Subscriptions", icon: <MdOutlineSubscriptions /> },
  ];
  const SidebarItems2 = [
    {
      id: 1,
      name: "Your Channel",
      icon: <FaRegUser />,
    },
    {
      id: 2,
      name: "History",
      icon: <MdHistory />,
    },
    {
      id: 3,
      name: "Playlists",
      icon: <MdOutlinePlaylistPlay />,
    },

    { id: 4, name: "Your Videos", icon: <BiSolidVideos /> },
    { id: 5, name: "Watch Later", icon: <MdOutlineWatchLater /> },
    { id: 6, name: "Liked Videos", icon: <AiOutlineLike /> },
  ];
  const SidebarItems3 = [
    {
      id: 1,
      name: "Trending",
      icon: <FaFire />,
    },
    {
      id: 2,
      name: "Shopping",
      icon: <GiShoppingCart />,
    },
    {
      id: 3,
      name: "Music",
      icon: <IoMusicalNoteOutline />,
    },

    { id: 4, name: "Films", icon: <PiFilmSlateLight /> },
    { id: 5, name: "Live", icon: <TbRadioactiveFilled /> },
    { id: 6, name: "Games", icon: <IoGameControllerOutline /> },
    {
      id: 7,
      name: "News",
      icon: <IoNewspaperOutline />,
    },
    {
      id: 8,
      name: "Sports",
      icon: <CiTrophy />,
    },

    { id: 9, name: "Courses", icon: <GoLightBulb /> },
    { id: 10, name: "Fashion", icon: <SiStylelint /> },
    { id: 11, name: "Podcast", icon: <MdOutlineCellTower /> },
  ];
  const SidebarItems4 = [
    {
      id: 1,
      name: "Your Premium",
      icon: <FaYoutube />,
    },
    {
      id: 1,
      name: "Youtube Studio",
      icon: <SiYoutubestudio />,
    },
    { id: 3, name: "Youtube Music", icon: <SiYoutubemusic /> },
    { id: 3, name: "Youtube Kids", icon: <SiYoutubekids /> },
  ];
  return (
    <div className="px-6 w-[15%] h-[calc(100vh-6.625rem)] overflow-y-scroll mt-16 overflow-x-hidden">
      {/* home */}
      <div className=" space-y-4 items-center">
        {SidebarItems.map((item) => {
          return (
            <div className="flex items-center space-x-5 hover:bg-gray-300 duration-200 rounded-xl px-2 py-1">
              <div className="size-5 cursor-pointer "> {item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/* You */}
      <div className="mt-4 space-y-4 items-center">
        <div className="flex items-center  space-x-2">
          <h1 className="">You</h1>
          <MdOutlineKeyboardArrowRight />
        </div>
        {SidebarItems2.map((item) => {
          return (
            <div className="flex items-center space-x-5 hover:bg-gray-300 duration-200 rounded-xl px-2 py-1">
              <div className="size-5 cursor-pointer "> {item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      <div className="mt-4 space-y-4 items-center">
        <div className="flex items-center  space-x-2">
          <h1 className="font-semibold">Explore</h1>
        </div>
        {SidebarItems3.map((item) => {
          return (
            <div className="flex items-center space-x-5 hover:bg-gray-300 duration-200 rounded-xl px-2 py-1">
              <div className="size-5 cursor-pointer "> {item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      <div className="mt-4 space-y-4 items-center">
        <div className="flex items-center  space-x-2">
          <h1 className="font-semibold">More from Youtube</h1>
        </div>
        {SidebarItems4.map((item) => {
          return (
            <div className="flex items-center space-x-5 hover:bg-gray-300 duration-200 rounded-xl px-2 py-1">
              <div className="size-5 cursor-pointer text-red-600 ">
                {" "}
                {item.icon}
              </div>
              <span className="cursor-pointer ">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      <br />
      <span className="text-xs font-semibold text-gray-500">
        About Press Copyright
        <br />
        Contact usCreator
        <br />
        AdvertiseDevelopers
        <br />
        <br />
        <p>
          Terms Privacy Policy & Safety <br /> How YouTube works <br />
          Test new features
        </p>
      </span>
      <br />
      <p className="text-xs text-gray-800">© 2024 Rana Coding</p>
    </div>
  );
}

export default Sidebar;
