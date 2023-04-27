import React from "react"
import Styles from "./navigation.styled"
import { graphql, useStaticQuery } from "gatsby"

const Navigation = () => {
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
    <Styles>
      {data.allContentfulButcherLogo.edges.map(edge => {
        return (
          <>
            <nav>
              <ul className="butcher-logo">
                <li>
                  <img src={edge.node.butcherLogo[0].url} />
                </li>
              </ul>
              <ul className="main-links">
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
