import React from "react";

const Header = () => {
  return (
    <div className=" w-screen px-[6vw] py-3 bg-zinc-800 flex flex-col gap-4 text-white border-b border-b-zinc-400">
      <nav className=" flex justify-between items-center text-white  ">
        <span>BeatMarket</span>
        <div className=" border border-zinc-400 rounded-lg flex items-center justify-center absolute left-[50%] translate-x-[-50%]">
          <input
            type="text"
            className=" bg-transparent w-[20vw]  h-8 p-1 outline-none text-white"
            placeholder="Search Beats"
          />
          <button className="mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              color="white"
              fill="white"
            >
              <path
                color="white"
                d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"
              />
            </svg>
          </button>
        </div>
        <div className=" flex gap-4">
          <button className=" border-r px-4">Signup</button>
          <button>Signin</button>
          <button className=" bg-green-400 text-black p-2 rounded-md">
            Start selling
          </button>
        </div>
      </nav>
      <div className=" w-[100%] flex items-center text-white gap-5 justify-center">
        <ul className=" flex gap-8">
          <li className=" p-[4px]  rounded-lg">Hip-Hop</li>
          <li className=" p-[4px]  rounded-lg">Pop</li>
          <li className=" p-[4px]  rounded-lg">Drill</li>
          <li className=" p-[4px]  rounded-lg">R&B</li>
          <li className=" p-[4px]  rounded-lg">Electronic</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
