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
            homePageHeroMarquee {
              homePageHeroMarquee
            }
            foodMarquee {
              foodMarquee
            }
            drinkMarquee {
              drinkMarquee
            }
            eventsMarquee {
              eventsMarquee
            }
            locationMarquee {
              locationMarquee
            }
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
                {console.log(edge.node.foodHeroImages.length)}
                <HomePageHero
                  id="hero"
                  title={
                    edge.node.heroTitle === "na" ? "" : edge.node.heroTitle
                  }
                  subTitle={edge.node.heroSubtitle}
                  description={edge.node.heroDescription}
                  heroImage={edge.node.heroImage.file.url}
                  alt={edge.node.heroImage.description}
                  btnTitle="ORDER ONLINE"
                  btnLink="https://order.butcherandbarrel.pub/s/order"
                  marquee={
                    edge.node.homePageHeroMarquee.homePageHeroMarquee === "na"
                      ? ""
                      : edge.node.homePageHeroMarquee.homePageHeroMarquee
                  }
                />
                <hr className="hero-break" />
                <>
                  <HomePageHero
                    id="food"
                    title={edge.node.foodHeroTitle}
                    subTitle={edge.node.foodHeroSubtitle}
                    description={edge.node.foodHeroDescription}
                    heroImage={edge.node.foodHeroImages[0].file.url}
                    heroImage2={edge.node.foodHeroImages[1].file.url}
                    heroImage3={edge.node.foodHeroImages[2].file.url}
                    alt={edge.node.foodHeroImages.description}
                    btnTitle="FOOD MENU"
                    marquee={
                      edge.node.foodMarquee.foodMarquee === "na"
                        ? ""
                        : edge.node.foodMarquee.foodMarquee
                    }
                  />
                </>
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
                      marquee={
                        edge.node.drinkMarquee.drinkMarquee === "na"
                          ? ""
                          : edge.node.drinkMarquee.drinkMarquee
                      }
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
                      marquee={
                        edge.node.eventsMarquee.eventsMarquee === "na"
                          ? ""
                          : edge.node.eventsMarquee.eventsMarquee
                      }
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
                      marquee={
                        edge.node.locationMarquee.locationMarquee === "na"
                          ? ""
                          : edge.node.locationMarquee.locationMarquee
                      }
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
