import React from "react"
import Styles from "./HomePageHero.styled"

const HomePageHero = ({ title, subTitle, description, heroImage }) => {
  return (
    <Styles>
      <img src={heroImage} />
      <div className="hero-content">
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <h2>{description}</h2>
      </div>
    </Styles>
  )
}

export default HomePageHero
