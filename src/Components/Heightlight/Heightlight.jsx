import React from "react";
import App from "../../Pages/App/App.jsx";
import "../../App.css"; // includes marquee animation styles

const Heightlight = ({ data }) => {
  const apps = Array.isArray(data) ? data : [];

  if (!apps.length) {
    return (
      <div className="w-full mx-auto my-10 flex justify-center">
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }

  // Take first 6 apps and duplicate for seamless loop
  const firstSix = apps.slice(0, 8);
  const loopApps = [...firstSix, ...firstSix];

  return (
    <div className="w-full mx-auto my-10 overflow-hidden">
      <div className="animate-marquee flex gap-6">
        {loopApps.map((singleApp, idx) => (
          <div
            key={`${singleApp.id}-${idx}`}
            className="min-w-[250px] flex-shrink-0"
          >
            <App singleApp={singleApp} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Heightlight;
