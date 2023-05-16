import React from "react"
import Layout from "../components/layout"
import Styles from "./drink-menu.styled"
import { useStaticQuery, graphql } from "gatsby"
import MenuItem from "../components/MenuItem/menuItem"

const DrinkMenuPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulButcherDrinkMenuPage {
        edges {
          node {
            heroTitle
            heroSubtitle
            heroImage {
              file {
                url
              }
            }
            drinkMenuItem {
              title
              description
              signature
              red
              white
              ales
              pilsnerAndLagers
              porteresAndStouts
              domestics
              price
              drinkImage {
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
        {console.log(data)}
        {data.allContentfulButcherDrinkMenuPage.edges.map(edge => {
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
                  <h1>Signiture Cocktails</h1>
                  <div className="line-break" />
                </div>
                <div className="menu-items">
                  {edge.node.drinkMenuItem.map(item => {
                    return (
                      <>
                        {item.signature && (
                          <MenuItem
                            menuImage={item.drinkImage.file.url}
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
              <div className="menu-section">
                <div className="starter-section">
                  <h1>Reds by the Glass</h1>
                  <div className="line-break" />
                </div>
                <div className="menu-items">
                  {edge.node.drinkMenuItem.map(item => {
                    return (
                      <>
                        {item.red && (
                          <MenuItem
                            menuImage={item.drinkImage.file.url}
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
              <div className="menu-section">
                <div className="starter-section">
                  <h1>Whites by the Glass</h1>
                  <div className="line-break" />
                </div>
                <div className="menu-items">
                  {edge.node.drinkMenuItem.map(item => {
                    return (
                      <>
                        {item.white && (
                          <MenuItem
                            menuImage={item.drinkImage.file.url}
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
              <div className="menu-section">
                <div className="starter-section">
                  <h1>Ales</h1>
                  <div className="line-break" />
                </div>
                <div className="menu-items">
                  {edge.node.drinkMenuItem.map(item => {
                    return (
                      <>
                        {item.ales && (
                          <MenuItem
                            menuImage={item.drinkImage.file.url}
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
              <div className="menu-section">
                <div className="starter-section">
                  <h1>Pilsnars and Lagers</h1>
                  <div className="line-break" />
                </div>
                <div className="menu-items">
                  {edge.node.drinkMenuItem.map(item => {
                    return (
                      <>
                        {item.pilsnerAndLagers && (
                          <MenuItem
                            menuImage={item.drinkImage.file.url}
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
              <div className="menu-section">
                <div className="starter-section">
                  <h1>Porters & Stouts</h1>
                  <div className="line-break" />
                </div>
                <div className="menu-items">
                  {edge.node.drinkMenuItem.map(item => {
                    return (
                      <>
                        {item.porteresAndStouts && (
                          <MenuItem
                            menuImage={item.drinkImage.file.url}
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
              <div className="menu-section">
                <div className="starter-section">
                  <h1>Domestics</h1>
                  <div className="line-break" />
                </div>
                <div className="menu-items">
                  {edge.node.drinkMenuItem.map(item => {
                    return (
                      <>
                        {item.domestics && (
                          <MenuItem
                            menuImage={item.drinkImage.file.url}
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
              {/* <div className="menu-section">
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
              </div> */}
            </>
          )
        })}
      </Styles>
    </Layout>
  )
}

export default DrinkMenuPage
