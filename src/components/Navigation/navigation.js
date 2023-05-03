import React, { useState, useEffect } from "react"
import Styles from "./navigation.styled"
import { graphql, useStaticQuery } from "gatsby"

const Navigation = (backgroundColor, colors, navHeaderBackground) => {
  const [navView, setNavView] = useState("-300px")
  const [navIcon, setNavIcon] = useState("fa-bars")
  const [navStyles, setNavStyles] = useState({
    colors: "white",
    imageArray: 1,
    backgroundColor: "transparent",
    navHeaderBackground: "#333",
  })

  const handleClick = () => {
    if (navView === "-300px") {
      setNavView("0")
      setNavIcon("fa-x")
    } else {
      setNavView("-300px")
      setNavIcon("fa-bars")
    }
  }

  useEffect(() => {
    const handleScroll = e => {
      let y = window.scrollY
      console.log(y)
      if (y > 0) {
        setNavStyles({
          colors: "black",
          imageArray: 0,
          backgroundColor: "white",
          navHeaderBackground: "#333",
        })
      } else
        setNavStyles({
          colors: "white",
          imageArray: 1,
          backgroundColor: "transparent",
          navHeaderBackground: "transparent",
        })
    }
    document.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

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
    <Styles
      colors={navStyles.colors}
      backgroundColor={navStyles.backgroundColor}
      navView={navView}
      navHeaderBackground={navStyles.navHeaderBackground}
    >
      {/* <Announcments /> */}
      {data.allContentfulButcherLogo.edges.map(edge => {
        return (
          <>
            <div className="nav-container">
              <div className="nav-header">
                <p>Here is some text for this</p>
              </div>
              <nav className="main-nav">
                <ul className="butcher-logo">
                  <li>
                    <img
                      src={edge.node.butcherLogo[navStyles.imageArray].url}
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
            </div>
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
