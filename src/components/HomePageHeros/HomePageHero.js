import React from "react"
import Button from "../Buttons/Button"
import Styles from "./HomePageHero.styled"

const HomePageHero = ({
  title,
  subTitle,
  description,
  heroImage,
  alt,
  btnTitle,
  btnLink,
  id,
}) => {
  return (
    <Styles>
      <div className="overlay" />
      <div id={id} />
      <img src={heroImage} alt={alt} />
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <h2 className="sub-title">{subTitle}</h2>
        <h6 className="sub-description">{description}</h6>
        <Button title={btnTitle} link={btnLink} />
      </div>
    </Styles>
  )
}

export default HomePageHero
