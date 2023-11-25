import Image from "next/image";
import React from "react";
import { AiTwotoneStar } from "react-icons/ai";

const img =
  "https://ik.imagekit.io/imgkitt/pexels-plann-4565775.jpg?updatedAt=1693387982629";

const data = [
  {
    id: 1,
    url: "https://www.mcknightsseniorliving.com/wp-content/uploads/sites/3/2018/12/elder_Man_caregiver_GettyImages-489582797-2_2000x1125.jpg",
    name: "Seniours take-care",
    title: " package 30 days  with a good and friendly guide.",
    price: "112",
    rating: "4.6",
  },
  {
    id: 2,
    url: "https://blog.memorial.health/wp-content/uploads/2013/06/Senior-Woman-with-Doctor.jpg",
    name: "medician and Doctor guide",
    title: "package 30 days  with a good and friendly guide.",
    price: "132",
    rating: "4.5",
  },
  {
    id: 3,
    url: "https://www.telecalmprotects.com/wp-content/uploads/Caregiver-senior-on-phone.png",
    name: "helper calls",
    title: "package 30 days.",
    price: "128",
    rating: "4.1",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/1172518/pexels-photo-1172518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Health Care vacations",
    title: "package 29 days.",
    price: "182",
    rating: "4.9",
  },
  
];

const recommendation1 = () => {
  return (
    <div className="mt-10 max-w-[1300px] w-full h-full mx-auto p-2 flex items-center flex-col gap-8">
      <div className="w-full flex items-start justify-between">
        <div>
          <h2 className=" text-3xl font-semibold">subscriptions for you</h2>
          <p className="  text-xl font-medium text-gray-400">
            Best  subscribe recommendations from around you..
          </p>
        </div>
        <button className=" bg-[#ff473f] p-3 px-6 rounded-3xl font-semibold cursor-pointer text-white">
          Explore more
        </button>
      </div>

      <div className="cards-wrapper grid grid-cols-3 gap-6 w-full">
        {data.map((i) => (
          <div
            key={i.id}
            className="card shadow-md rounded-xl overflow-hidden w-full h-[550px] flex flex-col items-center"
          >
            <div className="flex-[2] w-full relative">
              <Image
                className=" object-cover"
                fill={true}
                src={i.url}
                alt="ok"
              />
            </div>
            <div className="flex-[1] p-4  w-full flex flex-col gap-4 items-center justify-center">
              <div className=" w-full flex items-center justify-between">
                <h2 className=" text-2xl font-semibold">{i.name}</h2>
                <div className=" flex items-center gap-2 text-2xl font-medium">
                  <span>
                    <AiTwotoneStar size={28} color="#ffb329" />
                  </span>
                  {i.rating}
                </div>
              </div>
              <div className="title text-xl font-medium text-gray-400">
                {i.title}
              </div>
              <div className=" w-full flex items-center justify-between">
                <h2 className="text-3xl font-medium">${i.price}</h2>
                <button className=" bg-[#ff473f] p-3 px-6 rounded-3xl font-semibold cursor-pointer text-white">
                  Book now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default recommendation1;
