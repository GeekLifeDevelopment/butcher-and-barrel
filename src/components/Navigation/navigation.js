import React, { useState, useEffect } from "react"
import Styles from "./navigation.styled"
import { Link, graphql, useStaticQuery } from "gatsby"

const Navigation = (backgroundColor, colors, navHeaderBackground) => {
  const [navView, setNavView] = useState("-300px")
  const [navIcon, setNavIcon] = useState("fa-bars")
  const [navStyles, setNavStyles] = useState({
    colors: "white",
    imageArray: 0,
    backgroundColor: "transparent",
    navHeaderBackground: "transparent",
    borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
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
      if (y > 0) {
        setNavStyles({
          colors: "black",
          imageArray: 1,
          backgroundColor: "white",
          navHeaderBackground: "#333",
          borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
        })
      } else
        setNavStyles({
          colors: "white",
          imageArray: 0,
          backgroundColor: "transparent",
          navHeaderBackground: "transparent",
          borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
        })
    }
    document.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const data = useStaticQuery(graphql`
    query {
      allContentfulButcherNavigation {
        edges {
          node {
            butcherLogo {
              file {
                url
              }
            }
            headerAnnouncement
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
      borderBottom={navStyles.borderBottom}
    >
      {/* <Announcments /> */}
      {data.allContentfulButcherNavigation.edges.map(edge => {
        return (
          <>
            <div className="nav-container">
              <div className="nav-header">
                <p>{edge.node.headerAnnouncement}</p>
              </div>
              <nav className="main-nav">
                <ul className="butcher-logo">
                  <li>
                    <img
                      src={edge.node.butcherLogo[navStyles.imageArray].file.url}
                      alt="Butcher and Barrel Logo"
                    />
                  </li>
                </ul>
                <ul className="main-links">
                  <Link to="#food">
                    <li>FOOD</li>
                  </Link>
                  <Link to="#drinks">
                    <li>DRINKS</li>
                  </Link>
                  <Link to="#events">
                    <li>EVENTS</li>
                  </Link>
                  <Link to="#location">
                    <li>LOCATION</li>
                  </Link>
                </ul>
                <div onClick={handleClick} className="bars">
                  <i class={`fa-solid ${navIcon}`}></i>
                </div>
              </nav>
            </div>
            <nav className="mobile-nav">
              <ul>
                <Link to="#food">
                  <li>Food</li>
                </Link>
                <Link to="#drinks">
                  <li>Drink</li>
                </Link>
                <Link to="#events">
                  <li>Events</li>
                </Link>
                <Link to="#location">
                  <li>Location</li>
                </Link>
              </ul>
            </nav>
          </>
        )
      })}
    </Styles>
  )
}

export default Navigation
