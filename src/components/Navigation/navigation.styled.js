import styled from "styled-components"

const NavStyles = styled.nav`
  nav {
    display: flex;
    align-items: center;
    background-color: green;
  }
  .butcher-logo {
    list-style-type: none;
    img {
      width: 60px;
    }
  }

  .main-links {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
  }
`

export default NavStyles
