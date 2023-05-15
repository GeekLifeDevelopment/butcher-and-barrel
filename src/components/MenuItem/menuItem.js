import React from "react"
import Styles from "./menuItem.styled"

const MenuItem = ({ menuImage, menuTitle, menuItemDesc, price }) => {
  return (
    <Styles>
      <div className="menu-item-container">
        <div className="menu-image-container">
          <img src={menuImage} />
          <div className="price">${price}</div>
        </div>
        <h3>{menuTitle}</h3>
        <p>{menuItemDesc}</p>
      </div>
    </Styles>
  )
}

export default MenuItem
