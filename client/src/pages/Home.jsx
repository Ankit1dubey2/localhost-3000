import React from "react";
import Header from "../components/Header";
import Trending from "../components/Trending";
import Popular from "../components/Popular";

const Home = () => {
  return (
    <div className=" bg-zinc-800 w-screen h-screen text-white overflow-x-hidden flex flex-col gap-10">
      <Header />
      <Trending />
      <Popular />
    </div>
  );
};

export default Home;
