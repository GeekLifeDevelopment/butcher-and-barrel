import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { graphql, useStaticQuery } from "gatsby"

const HomePage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulButcherMenuItem {
        edges {
          node {
            title
          }
        }
      }
    }
  `)
  return (
    <div>
      {data.allContentfulButcherMenuItem.edges.map(edge => {
        return <h2>{edge.node.title}</h2>
      })}
    </div>
  )
}

export default HomePage

// {
//   data.allContentfulButcherMenuItem.edges.map(edge => {
//     return
//     ;<div>{edge.node.title}</div>
//   })
// }
