import { IoMenu } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { MdSlowMotionVideo } from "react-icons/md";
import logo from "../../public/logo.png";
import { FaRegBell } from "react-icons/fa6";
import sideicon from "../../public/sideicon.jpeg";

function Navbar() {
  return (
    <div className="flex justify-between fixed top-0 w-[100%] bg-white  px-6 py-2">
      <div className=" flex space-x-4 items-center">
        <IoMenu className="size-6 cursor-pointer hover:bg-gray-200" />
        <img src={logo} className="w-24 cursor-pointer" />
      </div>
      <div className=" flex w-[35%] items-center ">
        <div className="w-full px-3 py-2 border rounded-l-full ">
          <input type="text" className=" outline-none " placeholder="Search" />
        </div>
        <button className="px-4 py-2 rounded-r-full bg-gray-100 border ">
          <IoSearch className="size-6" />
        </button>
        <FaMicrophone className="size-10 ml-3 border hover:bg-gray-200 duration-200 rounded-full p-2 cursor-pointer" />
      </div>
      <div className=" flex space-x-4 items-center">
        <MdSlowMotionVideo className="size-6 cursor-pointer" />
        <FaRegBell className="size-6 cursor-pointer" />
        <img src={sideicon} className="w-8 rounded-full cursor-pointer" />
      </div>
    </div>
  );
}

export default Navbar;
