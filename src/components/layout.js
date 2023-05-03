import React from "react"
import GlobalStyles from "../styles/globalStyles"
import { ThemeProvider } from "styled-components"
import Navigation from "./Navigation/navigation"
import Footer from "./Footer/footer"
import theme from "../styles/theme"
import Announcments from "./Anouncments/Anouncments"

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navigation />
        <div>
          <main style={{ minHeight: "80vh" }}>{children}</main>
        </div>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
