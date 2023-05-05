import React from "react"
import Button from "../Buttons/Button"
import Styles from "./DrinkHero.styled"

const DrinkHero = ({
  title,
  subTitle,
  description,
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  alt,
  btnTitle,
  btnLink,
  id,
}) => {
  return (
    <Styles
      heroImage1={heroImage1}
      heroImage2={heroImage2}
      heroImage3={heroImage3}
      heroImage4={heroImage4}
    >
      <div className="overlay" />
      <div id={id} />
      <div className="image-container">
        <div className="pic" id="pic4" />
        <div className="pic" id="pic3" />
        <div className="pic" id="pic2" />
        <div className="pic" id="pic1" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <h2 className="sub-title">{subTitle}</h2>
        <h6 className="sub-description">{description}</h6>
        <Button title={btnTitle} link={btnLink} />
      </div>
    </Styles>
  )
}

export default DrinkHero
