import React, { useState } from "react"
import Styles from "./navigation.styled"
import { graphql, useStaticQuery } from "gatsby"

const Navigation = () => {
  const [navView, setNavView] = useState("-300px")
  const [navIcon, setNavIcon] = useState("fa-bars")

  const handleClick = () => {
    if (navView === "-300px") {
      setNavView("0")
      setNavIcon("fa-x")
    } else {
      setNavView("-300px")
      setNavIcon("fa-bars")
    }
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
                  <img
                    src={edge.node.butcherLogo[1].url}
                    alt="Butcher and Barrel Logo"
                  />
                </li>
              </ul>
              <ul className="main-links">
                <li>FOOD</li>
                <li>DRINKS</li>
                <li>EVENTS</li>
                <li>LOCATION</li>
              </ul>
              <div onClick={handleClick} className="bars">
                <i class={`fa-solid ${navIcon}`}></i>
              </div>
            </nav>
            <nav className="mobile-nav">
              <ul>
                <li>Food</li>
                <li>Drink</li>
                <li>Events</li>
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
