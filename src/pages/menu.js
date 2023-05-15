import React from "react"
import Layout from "../components/layout"
import Styles from "./menu.styled"
import { useStaticQuery, graphql } from "gatsby"
import MenuItem from "../components/MenuItem/menuItem"

const MenuPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulButcherMenuPage {
        edges {
          node {
            heroImage {
              file {
                url
              }
            }
            heroTitle
            heroSubtitle
            butcherMenuItem {
              starter
              fromTheGarden
              featuredEntrees
              sandwiches
              price
              title
              subTitle
              picture {
                file {
                  url
                }
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
        {data.allContentfulButcherMenuPage.edges.map(edge => {
          return (
            <>
              <div className="hero-section">
                <div className="overlay" />
                <img src={edge.node.heroImage.file.url} alt="" />
                <div className="hero-content">
                  <h1>{edge.node.heroTitle}</h1>
                  <p>{edge.node.heroSubtitle}</p>
                </div>
              </div>
              <div className="menu-section">
                <div className="starter-section">
                  <h1>Starters</h1>
                  <div className="line-break" />
                </div>
                <div className="menu-items">
                  {edge.node.butcherMenuItem.map(item => {
                    return (
                      <>
                        {item.starter && (
                          <MenuItem
                            menuImage={item.picture.file.url}
                            menuTitle={item.title}
                            menuItemDesc={item.subTitle}
                            price={item.price}
                          />
                        )}
                      </>
                    )
                  })}
                </div>
                <div className="starter-section">
                  <h1>Featured</h1>
                  <div className="line-break" />
                </div>
                <div className="menu-items">
                  {edge.node.butcherMenuItem.map(item => {
                    return (
                      <>
                        {item.featuredEntrees && (
                          <MenuItem
                            menuImage={item.picture.file.url}
                            menuTitle={item.title}
                            menuItemDesc={item.subTitle}
                            price={item.price}
                          />
                        )}
                      </>
                    )
                  })}
                </div>
                <div className="starter-section">
                  <h1>Sandwiches</h1>
                  <div className="line-break" />
                </div>
                <div className="menu-items">
                  {edge.node.butcherMenuItem.map(item => {
                    return (
                      <>
                        {item.sandwiches && (
                          <MenuItem
                            menuImage={item.picture.file.url}
                            menuTitle={item.title}
                            menuItemDesc={item.subTitle}
                            price={item.price}
                          />
                        )}
                      </>
                    )
                  })}
                </div>
                <div className="starter-section">
                  <h1>From the Garden</h1>
                  <div className="line-break" />
                </div>
                <div className="menu-items">
                  {edge.node.butcherMenuItem.map(item => {
                    return (
                      <>
                        {item.fromTheGarden && (
                          <MenuItem
                            menuImage={item.picture.file.url}
                            menuTitle={item.title}
                            menuItemDesc={item.subTitle}
                            price={item.price}
                          />
                        )}
                      </>
                    )
                  })}
                </div>
              </div>
            </>
          )
        })}
      </Styles>
    </Layout>
  )
}

export default MenuPage
