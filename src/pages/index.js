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
            foodHeroTitle
            foodHeroSubtitle
            foodHeroDescription
            drinkHeroTitle
            drinkHeroSubtitle
            drinkHeroDescription
            eventsHeroTitle
            eventsHeroSubtitle
            eventsHeroDescription
            locationHeroTitle
            locationHeroSubtitle
            locationHeroDescription
            locationHeroImages {
              description
              file {
                url
              }
            }
            butcherEventsHeroImages {
              description
              file {
                url
              }
            }
            drinkHeroImages {
              description
              file {
                url
              }
            }
            foodHeroImages {
              description
              file {
                url
              }
            }
            heroDescription
            heroImage {
              description
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
              <>
                <HomePageHero
                  title={edge.node.heroTitle}
                  subTitle={edge.node.heroSubtitle}
                  description={edge.node.heroDescription}
                  heroImage={edge.node.heroImage.file.url}
                  alt={edge.node.heroImage.description}
                />
                {edge.node.foodHeroImages.map(foodHeroImage => {
                  return (
                    <HomePageHero
                      title={edge.node.foodHeroTitle}
                      subTitle={edge.node.foodHeroSubtitle}
                      description={edge.node.foodHeroDescription}
                      heroImage={foodHeroImage.file.url}
                      alt={foodHeroImage.description}
                    />
                  )
                })}
                {edge.node.drinkHeroImages.map(drinkHeroImage => {
                  return (
                    <HomePageHero
                      title={edge.node.drinkHeroTitle}
                      subTitle={edge.node.drinkHeroSubtitle}
                      description={edge.node.drinkHeroDescription}
                      heroImage={drinkHeroImage.file.url}
                      alt={drinkHeroImage.description}
                    />
                  )
                })}
                {edge.node.butcherEventsHeroImages.map(eventHeroImage => {
                  return (
                    <HomePageHero
                      title={edge.node.eventsHeroTitle}
                      subTitle={edge.node.eventsHeroSubtitle}
                      description={edge.node.eventsHeroDescription}
                      heroImage={eventHeroImage.file.url}
                      alt={eventHeroImage.description}
                    />
                  )
                })}
                {edge.node.locationHeroImages.map(locationHeroImage => {
                  return (
                    <HomePageHero
                      title={edge.node.locationHeroTitle}
                      subTitle={edge.node.locationHeroSubtitle}
                      description={edge.node.locationHeroDescription}
                      heroImage={locationHeroImage.file.url}
                      alt={locationHeroImage.description}
                    />
                  )
                })}
              </>
            )
          })}
        </div>
      </Styles>
    </Layout>
  )
}

export default HomePage
