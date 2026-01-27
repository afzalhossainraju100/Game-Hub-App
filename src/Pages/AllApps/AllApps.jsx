import React, { Suspense } from "react";
import { useLoaderData } from "react-router-dom";
import App from "../App/App.jsx";

const AllApps = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="flex flex-col w-[90%] justify-center items-center space-y-6 my-10 mx-auto">
        <div className="flex flex-col w-[90%] justify-center items-center p-10">
          <h1 className="text-[#000000] text-[2.5rem] font-bold leading-[3rem] text-center">
            Our All Applications
          </h1>
          <p className="text-[#627382] text-[1.25rem] font-normal leading-[2rem] text-center">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-between items-center mb-6">
          <div className="font-bold">({data.length}) Apps Found</div>
          <label className="input bg-[#ffffff] border-[#d1d5db] rounded-md flex flex-row gap-2 items-center px-6 py-2 shadow-sm">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search Apps" />
          </label>
        </div>
        <Suspense
          fallback={
            <span className="loading loading-infinity loading-xl"></span>
          }
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
            {data.map((singleApp) => (
              <App key={singleApp.id} singleApp={singleApp} />
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default AllApps;
