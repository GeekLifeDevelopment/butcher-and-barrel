import React from "react"
import Layout from "../components/Layout"
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
