import React, { useState } from "react"
import Styles from "./navigation.styled"
import { graphql, useStaticQuery } from "gatsby"

const Navigation = () => {
  const [navView, setNavView] = useState("-300px")

  const handleClick = () => {
    navView === "-300px" ? setNavView("0") : setNavView("-300px")
  }

  const data = useStaticQuery(graphql`
    query {
      allContentfulButcherLogo {
        edges {
          node {
            butcherLogo {
              url
            }
          }
        }
      }
    }
  `)
  return (
    <Styles navView={navView}>
      {data.allContentfulButcherLogo.edges.map(edge => {
        return (
          <>
            <nav className="main-nav">
              <ul className="butcher-logo">
                <li>
                  <img src={edge.node.butcherLogo[1].url} />
                </li>
              </ul>
              <ul className="main-links">
                <li>Food</li>
                <li>Drink</li>
                <li>Barrel Room</li>
                <li>Location</li>
              </ul>
              <div onClick={handleClick} className="bars">
                <i class="fa-solid fa-bars"></i>
              </div>
            </nav>
            <nav className="mobile-nav">
              <ul>
                <li>Food</li>
                <li>Drink</li>
                <li>Barrel Room</li>
                <li>Location</li>
              </ul>
            </nav>
          </>
        )
      })}
    </Styles>
  )
}

export default Navigation
