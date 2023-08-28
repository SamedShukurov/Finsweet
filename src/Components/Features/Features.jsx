import React from 'react'
import "./features.css"
import HeroSection from "../HeroSection/HeroSection"
const Features = () => {
  let data = {
    title: "All the features you need",
    paragrafh:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    img:require('../svg/Illustration home.svg').default,
    btn:"View Pricing",
    btnTo:"/pricing"
  }
  let dp = {
    display:"none"
  }
  return (
    <div className='Features'>
      <HeroSection data={data} dp={dp}/>
    </div>
  )
}

export default Features