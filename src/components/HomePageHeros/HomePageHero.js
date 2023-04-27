import React from "react"
import Styles from "./HomePageHero.styled"

const HomePageHero = ({ title, subTitle, description, heroImage }) => {
  return (
    <Styles>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <h2>{description}</h2>
    </Styles>
  )
}

export default HomePageHero
