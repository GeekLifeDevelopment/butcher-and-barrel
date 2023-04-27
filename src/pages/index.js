import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
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
    <Layout>
      <div>
        {data.allContentfulButcherMenuItem.edges.map(edge => {
          return <h2>{edge.node.title}</h2>
        })}
      </div>
    </Layout>
  )
}

export default HomePage
