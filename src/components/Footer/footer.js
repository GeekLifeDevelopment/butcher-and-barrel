import React from "react"
import Styles from "./footer.sytled"
import { Link, graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulButcherFooter {
        edges {
          node {
            logo {
              file {
                url
              }
            }
            header1
            contactUs
            header2
            hours
            header3
            employment
          }
        }
      }
    }
  `)
  return (
    <>
      <Styles>
        {data.allContentfulButcherFooter.edges.map(edge => {
          return (
            <>
              <div className="footer-container">
                <div className="logo-section">
                  <img
                    src={edge.node.logo.file.url}
                    alt="Butcher and Barrel Logo"
                  />
                </div>
                <div className="contact-section">
                  <h3>{edge.node.header1}</h3>
                  {edge.node.contactUs.map(contacts => {
                    return (
                      <>
                        <ul>
                          <li>{contacts}</li>
                        </ul>
                      </>
                    )
                  })}
                  <div className="social">
                    <a
                      href="https://www.facebook.com/ButcherNBarrelWI/"
                      target="_blank"
                    >
                      <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/explore/locations/277797319402771/butcher-barrel-gastropub/?hl=en"
                      target="_blank"
                    >
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com/butcherbarrel" target="_blank">
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a
                      href="https://www.yelp.com/biz/butcher-and-barrel-gastropub-racine"
                      targete="_blank"
                    >
                      <i class="fa-brands fa-yelp"></i>
                    </a>
                  </div>
                  <a
                    className="gift-cards"
                    href="https://squareup.com/gift/7G1DN9PSAB3B9/order"
                    target="_blank"
                  >
                    <p>Gift cards available HERE</p>
                  </a>
                </div>
                <div className="hour-section">
                  <h3>{edge.node.header2}</h3>
                  {edge.node.hours.map(hour => {
                    return (
                      <>
                        <ul>
                          <li>{hour}</li>
                        </ul>
                      </>
                    )
                  })}
                </div>
                <div className="employment-section">
                  <h3>{edge.node.header3}</h3>
                  {edge.node.employment.map(employments => {
                    return (
                      <>
                        <ul>
                          <li>{employments}</li>
                        </ul>
                      </>
                    )
                  })}
                  <a
                    className="gift-cards"
                    href="https://gastropubjob.wufoo.com/forms/bucher-barrel-gastropub/"
                    target="_blank"
                  >
                    <p>Application</p>
                  </a>
                </div>
              </div>
              <hr />
              <p className="trademark">
                © 2018 Butcher & Barrel, All Rights Reserved.
              </p>
            </>
          )
        })}
      </Styles>
    </>
  )
}

export default Footer
