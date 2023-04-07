import {
  AiOutlineWhatsApp,
  AiFillFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className="bg-gradient-to-br flex flex-col items-center justify-center h-[20vh] w-[100%] from-[#121b55] to-[#2a3373]">
      <div className="flex text-white">
        <AiFillFacebook
          className="m-5 hover:text-blue-400 hover:cursor-pointer "
          size={35}
        />
        <AiOutlineWhatsApp
          className="m-5 hover:text-lime-400 hover:cursor-pointer"
          size={35}
        />
        <AiOutlineInstagram
          className="m-5 hover:text-gradient-to-br hover:cursor-pointer hover:text-pink-300"
          size={35}
        />
      </div>
      <div className="text-white text-xl flex ">
        <p className="mr-2 hover:text-yellow-200 hover:cursor-pointer">
          Terms Of Use
        </p>
        <p>.</p>
        <p className="ml-2 hover:text-yellow-200 hover:cursor-pointer">
          Privacy Policy
        </p>
      </div>
      <h1 className="text-xl text-gray-500 mt-3">
        © 2023 EduGram Private Limited
      </h1>
    </div>
  );
};

export default Footer;
