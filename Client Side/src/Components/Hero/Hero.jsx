import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center w-11/12 md:w-10/12 mx-auto bg-base-300 px-5 md:px-20 my-5 rounded-2xl">
      <div className="left w-full flex flex-col gap-5 items-center md:items-start basis-4/5">
        <h1 className="text-5xl font-semibold text-center md:text-start">
          Discover Your Passion
        </h1>
        <p className="text-center md:text-start">
          Hobbies are personal activities that people enjoy doing during their
          free time, offering a break from daily responsibilities. They can
          range from creative pursuits like drawing, writing, or playing music
          to physical activities such as hiking, biking.
        </p>
        <Link to="/creategroup">
          <button className="btn btn-primary text-[18px] mb-5">
            Create Group
          </button>
        </Link>
      </div>

      <div className="right w-full flex justify-center md:justify-end items-center">
        <img
          className="w-50 md:w-100"
          src="https://i.ibb.co/RT550GjZ/Chat-GPT-Image-May-23-2025-08-21-41-AM.png"
          alt="Banner Picture"
        />
      </div>
    </div>
  );
};

export default Hero;
