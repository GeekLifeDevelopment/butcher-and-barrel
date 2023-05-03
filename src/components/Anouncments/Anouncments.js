import React, { useEffect, useState } from "react"
import Styles from "./Anouncments.styled"
import { graphql, useStaticQuery } from "gatsby"

const Announcments = isOpen => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAnnouncementBar {
        edges {
          node {
            text
            isActive
          }
        }
      }
    }
  `)
  const [openBanner, setOpenBanner] = useState({
    openBannerOpen: "block",
    openBannerClose: "none",
  })

  const handleClose = () => {
    setOpenBanner({
      openBannerOpen: "none",
    })
  }

  return (
    <>
      {data.allContentfulAnnouncementBar.edges.map(edge => {
        return (
          <Styles
            isOpen={
              edge.node.isActive
                ? openBanner.openBannerOpen
                : openBanner.closedBanner
            }
          >
            {console.log(edge.node.isActive)}
            <div className="banner-content">
              <div />
              <div className="text-content">{edge.node.text}</div>
              <div onClick={handleClose} className="close-btn">
                <i className="fa-solid fa-x"></i>
              </div>
            </div>
          </Styles>
        )
      })}
    </>
  )
}

export default Announcments
