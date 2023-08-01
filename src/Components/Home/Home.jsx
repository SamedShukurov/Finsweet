import React from "react";
//*Sections
import HeroSection from "../HeroSection/HeroSection";
import HomeWork from "./HomeWork";
import HomeView from "./HomeView"
import HomeFeatures from "./HomeFeatures";
//*css
import "./home.css";

const Home = () => {
  let data = {
    title: "Building stellar websites for early startups",
    paragrafh:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    img:require('../svg/Illustration home.svg').default
  }
  return (
    <div className="Home">
      <HeroSection data={data}/>
      <HomeWork />
      <HomeView/>
      <HomeFeatures/>
    </div>
  );
};

export default Home;
