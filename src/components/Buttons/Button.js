import React from "react"
import Styles from "./Button.styled"
import { Link } from "gatsby"

const Button = ({ title, link }) => {
  return (
    <Styles>
      <Link to={link} target="_blank">
        {title}
      </Link>
    </Styles>
  )
}

export default Button
