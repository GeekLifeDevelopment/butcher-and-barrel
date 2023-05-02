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
                  id="hero"
                  title={edge.node.heroTitle}
                  subTitle={edge.node.heroSubtitle}
                  description={edge.node.heroDescription}
                  heroImage={edge.node.heroImage.file.url}
                  alt={edge.node.heroImage.description}
                  btnTitle="ORDER ONLINE"
                />
                <hr className="hero-break" />
                {edge.node.foodHeroImages.map(foodHeroImage => {
                  return (
                    <HomePageHero
                      id="food"
                      title={edge.node.foodHeroTitle}
                      subTitle={edge.node.foodHeroSubtitle}
                      description={edge.node.foodHeroDescription}
                      heroImage={foodHeroImage.file.url}
                      alt={foodHeroImage.description}
                      btnTitle="FOOD MENU"
                    />
                  )
                })}
                <hr className="hero-break" />
                {edge.node.drinkHeroImages.map(drinkHeroImage => {
                  return (
                    <HomePageHero
                      id="drinks"
                      title={edge.node.drinkHeroTitle}
                      subTitle={edge.node.drinkHeroSubtitle}
                      description={edge.node.drinkHeroDescription}
                      heroImage={drinkHeroImage.file.url}
                      alt={drinkHeroImage.description}
                      btnTitle="DRINK MENUE"
                    />
                  )
                })}
                <hr className="hero-break" />
                {edge.node.butcherEventsHeroImages.map(eventHeroImage => {
                  return (
                    <HomePageHero
                      id="events"
                      title={edge.node.eventsHeroTitle}
                      subTitle={edge.node.eventsHeroSubtitle}
                      description={edge.node.eventsHeroDescription}
                      heroImage={eventHeroImage.file.url}
                      alt={eventHeroImage.description}
                      btnTitle="INQUIRE"
                    />
                  )
                })}
                <hr className="hero-break" />
                {edge.node.locationHeroImages.map(locationHeroImage => {
                  return (
                    <HomePageHero
                      id="location"
                      title={edge.node.locationHeroTitle}
                      subTitle={edge.node.locationHeroSubtitle}
                      description={edge.node.locationHeroDescription}
                      heroImage={locationHeroImage.file.url}
                      alt={locationHeroImage.description}
                      btnTitle="SEE MAP"
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
