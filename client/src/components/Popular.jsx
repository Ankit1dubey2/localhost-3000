import React from "react";
import Carousel from "./Carousel";

const data = [
  {
    img: "https://illpeoplemusic-v2-asserts-dev.s3.ap-south-1.amazonaws.com/images/genres/drill.jpg",
    title: "K$SNA",
  },
  {
    img: "https://illpeoplemusic-v2-asserts-dev.s3.ap-south-1.amazonaws.com/images/genres/drill.jpg",
    title: "K$SNA",
  },
  {
    img: "https://illpeoplemusic-v2-asserts-dev.s3.ap-south-1.amazonaws.com/images/genres/drill.jpg",
    title: "K$SNA",
  },
  {
    img: "https://illpeoplemusic-v2-asserts-dev.s3.ap-south-1.amazonaws.com/images/genres/drill.jpg",
    title: "K$SNA",
  },
  {
    img: "https://illpeoplemusic-v2-asserts-dev.s3.ap-south-1.amazonaws.com/images/genres/drill.jpg",
    title: "K$SNA",
  },
  {
    img: "https://illpeoplemusic-v2-asserts-dev.s3.ap-south-1.amazonaws.com/images/genres/drill.jpg",
    title: "K$SNA",
  },
  {
    img: "https://illpeoplemusic-v2-asserts-dev.s3.ap-south-1.amazonaws.com/images/genres/drill.jpg",
    title: "K$SNA",
  },
  {
    img: "https://illpeoplemusic-v2-asserts-dev.s3.ap-south-1.amazonaws.com/images/genres/drill.jpg",
    title: "K$SNA",
  },
  {
    img: "https://illpeoplemusic-v2-asserts-dev.s3.ap-south-1.amazonaws.com/images/genres/drill.jpg",
    title: "K$SNA",
  },
];

const Popular = () => {
  return (
    <div className=" w-screen px-[6vw]">
      <h2 className=" text-4xl font-medium">Popular Producers</h2>
      <Carousel data={data} square={true} />
    </div>
  );
};

export default Popular;
