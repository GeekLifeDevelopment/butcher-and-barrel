import React from "react"
import Layout from "../components/layout"
import Styles from "./location.styled"
import { useStaticQuery, graphql } from "gatsby"

const LayoutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulButcherLocationPage {
        edges {
          node {
            title
            subtitle
            description
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
        {data.allContentfulButcherLocationPage.edges.map(edge => {
          return (
            <div className="hero-section">
              <div className="overlay" />
              <img src={edge.node.heroImage.file.url} alt="" />
              <div className="hero-content">
                <h1>{edge.node.title}</h1>
                <p>{edge.node.subtitle}</p>
              </div>
            </div>
          )
        })}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2930.906330732653!2d-87.7866756238895!3d42.72687327116109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1686768160475!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Styles>
    </Layout>
  )
}

export default LayoutPage
