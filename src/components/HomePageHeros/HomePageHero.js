import React from "react"
import Styles from "./HomePageHero.styled"

const HomePageHero = ({ title, subTitle, description, heroImage, alt }) => {
  return (
    <Styles>
      <div className="overlay"></div>
      <img src={heroImage} alt={alt} />
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <h2 className="sub-title">{subTitle}</h2>
        <h6 className="sub-description">{description}</h6>
      </div>
    </Styles>
  )
}

export default HomePageHero
