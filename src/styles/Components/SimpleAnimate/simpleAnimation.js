import React from "react"
import Styles from "./simpleAnimate.styled"

const SimpleAnimate = ({ children, className, up }) => {
  return (
    <Styles up={up}>
      <div className={className}>{children}</div>
    </Styles>
  )
}

export default SimpleAnimate
