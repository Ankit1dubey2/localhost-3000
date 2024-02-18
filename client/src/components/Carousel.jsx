import React, { useState } from "react";

const Carousel = ({ data, square = false }) => {
  const [shift, setShift] = useState(0);
  return (
    <div className=" w-screen overflow-x-hidden flex flex-col gap-5  rounded-xl my-5 p-5 ">
      <div className=" flex gap-16">
        {data.map((beat) => {
          return (
            <div
              className={`flex flex-col w-[15vw] min-w-[15vw] justify-center items-center gap-2 `}
              style={{ transform: `translateX(${shift * -15}vw)` }}
            >
              <img
                src={beat.img}
                alt=""
                className={` w-[100%] aspect-square object-cover ${
                  square ? " rounded-md" : "rounded-full"
                }`}
              />
              <span>{beat.title}</span>
              {beat.tempo ? <span>{beat.tempo} BPM</span> : null}
            </div>
          );
        })}
      </div>
      <div className=" flex w-[100%] justify-center gap-10 translate-x-[-6vw]">
        <button
          onClick={() => {
            if (shift == 0) {
              return;
            }
            setShift(shift - 5);
          }}
          className=" bg-green-400 text-black p-2 rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
          </svg>
        </button>
        <button
          className=" bg-green-400 text-black p-2 rounded-lg"
          onClick={() => {
            if (shift >= data.length) {
              return;
            }
            setShift(shift + 5);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
