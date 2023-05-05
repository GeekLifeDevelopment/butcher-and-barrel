import React from "react"
import Button from "../Buttons/Button"
import Styles from "./HomePageHero.styled"

const HomePageHero = ({
  title,
  subTitle,
  description,
  heroImage,
  heroImage2,
  heroImage3,
  alt,
  btnTitle,
  btnLink,
  id,
}) => {
  return (
    <Styles
      heroImage={heroImage}
      heroImage2={heroImage2}
      heroImage3={heroImage3}
    >
      <div id={id} />
      <div className="image-container">
        <div className="pic" id="image3" />
        <div className="pic" id="image2" />
        <div className="pic" id="image1" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <h2 className="sub-title">{subTitle}</h2>
        <h6 className="sub-description">{description}</h6>
        <Button title={btnTitle} link={btnLink} />
        <div className="marquee">
          <p>Here is the marquee that will scroll across the screen.</p>
        </div>
      </div>
    </Styles>
  )
}

export default HomePageHero
