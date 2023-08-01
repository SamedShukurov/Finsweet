import React from "react";
import Card from "../Card/Card";
import "./homeFeatures.css";
const HomeFeatures = () => {
  let dataClient = {
    img: require("../svg/Client.svg").default,
    title: "Uses Client First",
    content:
      "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
  }
  let dataVerify = {
    img: require("../svg/Verify.svg").default,
    title: "Two Free Revision Round",
    content:
      "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
  }
  let dataCustom = {
    img: require("../svg/Customization.svg").default,
    title: "Template Customization",
    content:
      "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
  }
  let dataSupport = {
    img: require("../svg/Support.svg").default,
    title: "24/7 Support",
    content:
      "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
  }
  let dataQuick = {
    img: require("../svg/Quick.svg").default,
    title: "Quick Delivery",
    content:
      "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
  }
  let dataList = {
    img: require("../svg/List.svg").default,
    title: "Hands-on approach",
    content:
      "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
  }
  let bgCardW ={
    backgroundColor:"white"
  }
  return (
    <div className="HomeFeatures">
      <h5>Features</h5>
      <h1>Design that solves problems, one product at a time</h1>
      <div className="HomeFeaturesCards">
        <Card data={dataClient} bg={bgCardW}/>
        <Card data={dataVerify} bg={bgCardW}/>
        <Card data={dataCustom} bg={bgCardW}/>
        <Card data={dataSupport} bg={bgCardW}/>
        <Card data={dataQuick} bg={bgCardW}/>
        <Card data={dataList} bg={bgCardW}/>
      </div>
    </div>
  );
};

export default HomeFeatures;
