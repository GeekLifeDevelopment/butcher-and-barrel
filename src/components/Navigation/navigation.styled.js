import styled from "styled-components"

const NavStyles = styled.nav`
  nav {
    width: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    background-color: transparent;
    border-bottom: 1px solid grey;
  }
  .butcher-logo {
    list-style-type: none;
    img {
      width: 60px;
    }
  }

  .main-links {
    color: white;
    list-style-type: none;
    display: flex;
    justify-content: space-around;
  }
`

export default NavStyles
