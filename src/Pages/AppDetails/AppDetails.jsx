import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import icondownloads from "../../assets/icondownloads.png";
import iconreview from "../../assets/iconreview.png";
import iconratings from "../../assets/iconratings.png";
import Chart from "../Chart/Chart.jsx";

const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/loadData.json")
      .then((res) => res.json())
      .then((data) => {
        const foundApp = data.find((item) => item.id === parseInt(id));
        setApp(foundApp);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading app data:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }

  if (!app) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-2xl font-bold">App not found</h1>
      </div>
    );
  }

  return (
    <div className="w-[90%] mt-10 mx-auto">
      <div className="flex flex-col gap-6 sm:flex-row mb-10">
        <img src={app.image} alt={app.title} className="rounded-lg" />
        <div className="space-y-4 flex flex-col items-start justify-start">
          <h1 className="text-[#001931]  font-bold text-[32px] leading-[39px] tracking-normal text-left capitalize">
            {app.companyName}: {app.title}
          </h1>
          <p className="font-bold text-xl leading-8 tracking-normal text-left">
            Developed by <span>{app.companyName}</span>
          </p>
          <hr className="w-full border-t border-t-[#001931]/20" />
          <div className="flex flex-col gap-20 sm:flex-row justify-self-start mt-10 mb-10">
            <div className="flex flex-col items-left space-y-2 justify-center">
              <img className="w-10 h-10" src={icondownloads} alt="" />
              <p className="text-base font-normal leading-6 tracking-normal text-left capitalize">
                Downloads
              </p>
              <h1 className="font-extrabold text-[40px] leading-[40px] tracking-normal text-left capitalize">
                {app.downloads}
              </h1>
            </div>
            <div className="flex flex-col items-left space-y-2 justify-center">
              <img className="w-10 h-10" src={iconratings} alt="" />
              <p className="text-base font-normal leading-6 tracking-normal text-left capitalize">
                Rating
              </p>
              <h1 className="font-extrabold text-[40px] leading-[40px] tracking-normal text-left capitalize">
                {app.ratingAvg}
              </h1>
            </div>
            <div className="flex flex-col items-left space-y-2 justify-center">
              <img className="w-10 h-10" src={iconreview} alt="" />
              <p className="text-base font-normal leading-6 tracking-normal text-left capitalize">
                Reviews
              </p>
              <h1 className="font-extrabold text-[40px] leading-[40px] tracking-normal text-left capitalize">
                {app.reviews}
              </h1>
            </div>
          </div>
          <button className=" px-5 py-3 rounded bg-[rgba(0,211,144,1)] text-[#ffffff]">
            Install Now ({app.size} MB)
          </button>
        </div>
      </div>
      <div>
        <Chart></Chart>
      </div>
      <div className="mb-10 mt-10">
        <h1>
          <b>Description</b>
        </h1>
        <p className="text-[rgba(98,115,130,1)] text-xl font-normal leading-8 tracking-normal text-left">
          {app.description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
