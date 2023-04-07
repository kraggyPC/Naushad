import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Header = () => {
  const [nav, setNav] = useState(false);
  const liClass =
    "px-3 mt-10 mx-3 text-xl cursor-pointer hover:text-yellow-200";
  const menuButtonClass = "mt-4 hover:cursor-pointer";
  const liResponsiveClass =
    "my-7 mx-2 text-lg pb-2 border-gray-400 cursor-pointer border-b-[1px] hover:text-yellow-200";
  return (
    <div className="flex mx-auto justify-between  text-white h-18">
      <div className="text-4xl mt-4  font-bold p-3">
        <p>EduGram</p>
      </div>
      <div className="md:block hidden">
        <ul className="flex">
          <li className={liClass}>Home</li>
          <li className={liClass}>About Us</li>
          <li className={liClass}>Product</li>
          <li className={liClass}>Contacts</li>
          <button
            className={`mt-8 mx-8 text-xl rounded px-6 py-2 border-[1px] border-white  ease-in duration-300 hover:bg-yellow-200 hover:text-[black]`}
          >
            Login
          </button>
        </ul>
      </div>
      <div onClick={() => setNav(!nav)} className="md:hidden block">
        {!nav ? (
          <AiOutlineMenu className={menuButtonClass} size={35} />
        ) : (
          <AiOutlineClose className={menuButtonClass} size={35} />
        )}
      </div>
      <div
        className={
          nav
            ? "h-[100vh] fixed left-0 top-0 w-[250px] bg-[#0c1c32] ease-in-out duration-500 "
            : "fixed left-[-100%]"
        }
      >
        <div className="text-3xl font-bold p-3">
          <p>EduGram</p>
        </div>
        <ul>
          <li className={liResponsiveClass}>Home</li>
          <li className={liResponsiveClass}>About Us</li>
          <li className={liResponsiveClass}>Product</li>
          <li className={liResponsiveClass}>Contacts</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
