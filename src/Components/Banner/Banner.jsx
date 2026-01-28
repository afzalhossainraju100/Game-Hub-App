import React from "react";
import Hero from "../../assets/Hero.png";
import GooglePlay from "../../assets/googlePlay.png";
import AppStore from "../../assets/appStore.png";

const Banner = () => {
  return (
    <div>
      <div className="hero mt-20">
        <div className="hero-content text-center py-0">
          <div className="max-w-[90%] mx-auto space-y-6 flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold">
              We Build <br />
              <span className="bg-gradient-to-t from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
                Productive
              </span>
              Apps
            </h1>
            <p className="text-gray-700">
              At GAME HUB, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting.
              <br /> Our goal is to turn your ideas into digital experiences
              that truly make an impact.
            </p>
            <div className="flex flex-row gap-4 justify-center">
              <a href="https://play.google.com/store/games">
                {" "}
                <button
                  type="button"
                  className="btn bg-[#d2d2d2] text-[#000000] border-0 shadow-sm hover:bg-[#bcbcbc]"
                >
                  <img src={GooglePlay} alt="Google Play" />
                  Google Play
                </button>
              </a>

              <a href="https://www.apple.com/app-store/">
                <button
                  type="button"
                  className="btn bg-[#d2d2d2] text-[#000000] border-0 shadow-sm hover:bg-[#bcbcbc]"
                >
                  <img src={AppStore} alt="App Store" /> App Store
                </button>
              </a>
            </div>
            <img src={Hero} alt="Hero" />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white hover:from-[#9F62F2] hover:to-[#632EE3] border-0 gap-2">
        <div className="w-[90%] mx-auto">
          <h2 className="p-8 font-bold text-[2.5rem] leading-[3rem] text-center">
            Trusted by Millions, Built for You
          </h2>
        </div>
        <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-center items-center p-8 gap-8 md:gap-20 lg:gap-32 xl:gap-44">
          <div className=" place-items-center">
            <div className="stat-title">Total Downloads</div>
            <div className="stat-value">29.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className=" place-items-center">
            <div className="stat-title">Total Reviews</div>
            <div className="stat-value ">906K</div>
            <div className="stat-desc ">↗︎ 46% more than last month (2%)</div>
          </div>

          <div className="place-items-center">
            <div className="stat-title">Active Apps</div>
            <div className="stat-value">132+</div>
            <div className="stat-desc">31 more will Launch</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
