import React from "react";
import Banner from "../../Components/Banner/Banner.jsx";
import Apps from "../Apps/Apps.jsx";
import { useLoaderData } from "react-router-dom";
import Heightlight from "../../Components/Heightlight/Heightlight.jsx";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Heightlight data={data}></Heightlight>
      <Apps data={data}></Apps>
    </div>
  );
};

export default Home;
