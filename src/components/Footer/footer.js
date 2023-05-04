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
