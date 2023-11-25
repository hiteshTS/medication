import Image from "next/image";
import React from "react";
import { MdFlight, MdHotel } from "react-icons/md";

const ImageURL =
  "https://www.mypressplus.com/wp-content/uploads/2019/03/Medical-Supplies-in-uganda-aspire-life-health-uganda.jpg";

const Hero = () => {
  return (
    <div className="hero-conatiner h-[600px]  relative  top-0 left-0 w-full mx-auto">
      <div className="hero-img relative w-full h-[500px] overflow-hidden">
        <Image
          className="h-[100%] object-cover w-full "
          src={ImageURL}
          alt="hero"
          fill={true}
        />
        <div className="details h-full w-full absolute top-0 left-0 flex items-center justify-center flex-col gap-2 text-center ">
          <h2 className="text-[3rem] text-black font-light ">
            It is time to <span className="font-bold">be you</span>
          </h2>
          <p className=" text-black font-normal">
             health care important...
          </p>
        </div>
      </div>

      <div className="search absolute bottom-0 left-[50%] translate-x-[-50%] m-auto">
        <div className="btns flex item-center gap-0">
          <button className=" flex items-center gap-2 text-white backdrop-blur-3xl font-medium  p-3 px-4">
            {" "}
            <MdHotel />medication remainder alart
          </button>
        </div>
        <div className="inputs flex items-end justify-between  px-12 p-10 bg-white shadow-md gap-3 h-[150px]">
          <div className="div">
            <label className="text-gray-900 font-medium">Medication Name</label>
            <input
              className="p-2 border focus:outline-none w-[200px]"
              type="text"
              placeholder="Enter Medication Name"
            />
          </div>
          <div className="div">
           <label className="text-gray-900 font-medium">Medication Time</label>
            <input className="p-2 border focus:outline-none" type="time" />
          </div>
          <div className="div">
          <label className="text-gray-900 font-medium">Frequency</label>
          <select className="p-2 border focus:outline-none">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            {/* Add more options as needed */}
          </select>
        </div>
          
          <button className=" bg-[#ff473f] p-[10px] px-5 text-white">
           sent time
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
