import React from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { LuDownload } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import iconreview from "../../assets/iconreview.png";

const AppDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  let singleApp = undefined;
  if (Array.isArray(data)) {
    singleApp = data.find((app) => app.id === parseInt(id));
  }
  console.log(singleApp);

  if (!singleApp) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-2xl font-bold">App not found</h1>
      </div>
    );
  }console.log("");

  return (
    <div className="w-[90%] mx-auto my-10">
      <div className="flex gap-6">
        <img
          className="w-50 h-auto rounded-lg"
          src={singleApp.image}
          alt={singleApp.title}
        />
        <div className="flex flex-col justify-start items-left gap-4">
          <div>
            {" "}
            <h1>
              {singleApp.companyName}: {singleApp.title}
            </h1>
            <p>{singleApp.category}</p>
          </div>

          <hr className="w-full border-t border-t-[#001931]/20" />
          <div className="flex flex-col gap-12 sm:flex-row justify-start mt-6 mb-6">
            <div className="flex flex-col items-start space-y-2">
              <LuDownload className="w-8 h-8 text-gradient-to-r from-[#54CF68] to-[#00827A]" />
              <p className="text-base font-normal leading-6 tracking-normal text-left capitalize">
                Downloads
              </p>
              <p className="font-extrabold text-[32px] leading-10 tracking-normal text-left capitalize">
                {singleApp.downloads}
              </p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <FaStar className="w-8 h-8 text-[#FF8811]" />
              <p className="text-base font-normal leading-6 tracking-normal text-left capitalize">
                Rating
              </p>
              <p className="font-extrabold text-[32px] leading-10 tracking-normal text-left capitalize">
                {singleApp.ratingAvg}
              </p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <img className="w-8 h-8" src={iconreview} alt="reviews" />
              <p className="text-base font-normal leading-6 tracking-normal text-left capitalize">
                Reviews
              </p>
              <p className="font-extrabold text-[32px] leading-10 tracking-normal text-left capitalize">
                {singleApp.reviews}
              </p>
            </div>
          </div>
          <button className="px-5 py-3 rounded bg-[rgba(0,211,144,1)] text-white">
            Install Now ({singleApp.size} MB)
          </button>
        </div>
      </div>
      <hr className="w-full border-t border-t-[#001931]/20" />
      <div className="mt-6">
        <h1 className="text-xl font-bold mb-2">Description</h1>
        <p>{singleApp.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
