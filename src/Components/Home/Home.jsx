import React from "react";
//*Sections
import HeroSection from "../HeroSection/HeroSection";
import HomeWork from "./HomeWork";
import HomeView from "./HomeView"
import HomeFeatures from "./HomeFeatures";
import HomeClient from "./HomeClient"
import FAQ from  "../FAQ/FAQ"
import HomeInquiry from "./HomeInquiry";
import HomeBlog from "./HomeBlog";
//*css
import "./home.css";

const Home = () => {
  let data = {
    title: "Building stellar websites for early startups",
    paragrafh:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    img:require('../svg/Illustration home.svg').default,
    btn:"View our work",
    btnTo:"/features"
  }
  let dp = {
    display:"block"
  }
  return (
    <div className="Home">
      <HeroSection data={data} dp={dp}/>
      <HomeWork />
      <HomeView/>
      <HomeFeatures/>
      <HomeClient/>
      <FAQ/>
      <HomeInquiry/>
      <HomeBlog/>
    </div>
  );
};

export default Home;
