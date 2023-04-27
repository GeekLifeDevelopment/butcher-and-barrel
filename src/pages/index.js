import React from "react"
import Layout from "../components/layout"
import Styles from "./index-styled"
import { graphql, useStaticQuery } from "gatsby"
import HomePageHero from "../components/HomePageHeros/HomePageHero"

const HomePage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulButcherHomePage {
        edges {
          node {
            heroTitle
            heroSubtitle
            heroDescription
            heroImage {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Styles>
        <div>
          {data.allContentfulButcherHomePage.edges.map(edge => {
            return (
              <HomePageHero
                title={edge.node.heroTitle}
                subTitle={edge.node.heroSubtitle}
                description={edge.node.heroDescription}
              />
            )
          })}
        </div>
      </Styles>
    </Layout>
  )
}

export default HomePage
