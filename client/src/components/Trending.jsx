import React, { useState } from "react";
import Carousel from "./Carousel";

const data = [
  {
    img: "https://illpeoplemusic-v2-asserts-dev.s3.ap-south-1.amazonaws.com/beats/user-653b25ac5a4b4d135d21650b/beat-121012/cover-picture.png",
    title: "Lies in your eyes",
    tempo: 150,
  },
  {
    img: "https://illpeoplemusic-v2-asserts-dev.s3.ap-south-1.amazonaws.com/beats/user-653b25ac5a4b4d135d21650b/beat-121012/cover-picture.png",
    title: "Lies in your eyes",
    tempo: 150,
  },
  {
    img: "https://illpeoplemusic-v2-asserts-dev.s3.ap-south-1.amazonaws.com/beats/user-653b25ac5a4b4d135d21650b/beat-121012/cover-picture.png",
    title: "Lies in your eyes",
    tempo: 150,
  },
  {
    img: "https://illpeoplemusic-v2-asserts-dev.s3.ap-south-1.amazonaws.com/beats/user-653b25ac5a4b4d135d21650b/beat-121012/cover-picture.png",
    title: "Lies in your eyes",
    tempo: 150,
  },
  {
    img: "https://illpeoplemusic-v2-asserts-dev.s3.ap-south-1.amazonaws.com/beats/user-653b25ac5a4b4d135d21650b/beat-121012/cover-picture.png",
    title: "Lies in your eyes",
    tempo: 150,
  },
  {
    img: "https://illpeoplemusic-v2-asserts-dev.s3.ap-south-1.amazonaws.com/beats/user-653b25ac5a4b4d135d21650b/beat-121012/cover-picture.png",
    title: "Lies in your eyes",
    tempo: 150,
  },
  {
    img: "https://illpeoplemusic-v2-asserts-dev.s3.ap-south-1.amazonaws.com/beats/user-653b25ac5a4b4d135d21650b/beat-121012/cover-picture.png",
    title: "Lies in your eyes",
    tempo: 150,
  },
  {
    img: "https://illpeoplemusic-v2-asserts-dev.s3.ap-south-1.amazonaws.com/beats/user-653b25ac5a4b4d135d21650b/beat-121012/cover-picture.png",
    title: "Lies in your eyes",
    tempo: 150,
  },
  {
    img: "https://illpeoplemusic-v2-asserts-dev.s3.ap-south-1.amazonaws.com/beats/user-653b25ac5a4b4d135d21650b/beat-121012/cover-picture.png",
    title: "Lies in your eyes",
    tempo: 150,
  },
];

const Trending = () => {
  return (
    <div className=" w-screen px-[6vw]">
      <h2 className=" text-4xl font-medium">Trending beats</h2>
      <Carousel data={data} />
    </div>
  );
};

export default Trending;
