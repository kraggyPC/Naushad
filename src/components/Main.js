import HeroPng from "../assets/HeroPng.png";
import { BiRightArrowAlt } from "react-icons/ai";
const Main = () => {
  return (
    <div className="md:h-[92vh] lg:h-[50vh] h-[80vh]  text-white">
      <div className="flex flex-col md:flex-row md:justify-around mt-44">
        <div className="order-2 md:order-1">
          <h1 className="font-bold md:ml-5 mb-5 ml-[20%] mt-6 mx-auto text-3xl md:text-5xl">
            We aim for the Best For EveryOne
          </h1>
          <h1 className="md:ml-5 mr-15 mb-12 ml-[20%] lg:mb-12 xl:mb-36  mt-12 text-lg mx-auto  md:text-xl ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            vitae, eum et quo saepe sit ducimus! Quos cumque
            <br /> nostrum, Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Animi
          </h1>
          <button className=" ml-[20%] lg:text-2xl md:text-lg  text-black bg-yellow-300 border-[1px] py-3 px-4 rounded hover:bg-yellow-200">
            Lihat Kursus
          </button>
          <button className="ml-[20%] mt-6 md:mt-12 lg:mt-0 md:text-lg lg:text-2xl p-3 px-3 ease-in duration-200 rounded hover:bg-yellow-300 hover:text-black">
            Get Started
          </button>
        </div>

        <img
          className="ordrer-1 md:order-2 h-1/3 w-2/3 mx-auto md:w-auto md:mx-0 md:h-2/3  "
          src={HeroPng}
        />
      </div>
    </div>
  );
};

export default Main;
