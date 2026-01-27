import React from "react";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import App from "../App/App.jsx";

const Apps = ({ data }) => {
  return (
    <div className="flex flex-col w-[90%] justify-center items-center space-y-6 my-10 mx-auto">
      <div className="flex flex-col w-[90%] justify-center items-center p-10">
        <h1 className="text-[#000000] text-[2.5rem] font-bold leading-15 text-center">
          Our All Applications
        </h1>
        <p className="text-[#627382] text-[1.25rem] font-400  leading-15 text-center">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div>
        <div>Apps Found ({data.length})</div>
        <div></div>
      </div>
      <Suspense
        fallback={<span className="loading loading-infinity loading-xl"></span>}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
          {data.slice(0, 8).map((singleApp) => (
            <App key={singleApp.id} singleApp={singleApp} />
          ))}
        </div>
      </Suspense>
      <Link
        to="/allapps"
        className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white hover:from-[#9F62F2] hover:to-[#632EE3] border-0 px-6 py-3 rounded-md mb-10 shadow-md hover:shadow-lg text-[1rem] font-semibold"
      >
        Show All
      </Link>
    </div>
  );
};

export default Apps;
