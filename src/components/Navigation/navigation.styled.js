import styled from "styled-components"

const NavStyles = styled.nav`
  nav {
    width: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    background-color: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    z-index: 10;
  }
  .butcher-logo {
    width: 15%;
    list-style-type: none;
    img {
      width: 60px;
    }
  }

  .main-links {
    width: 60%;
    color: white;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 700px) {
      display: none;
    }
  }

  .bars {
    width: 100%;
    margin: 0 2rem;
    display: none;
    text-align: right;
    justify-self: right;
    color: white;
    @media (max-width: 700px) {
      display: block;
    }
  }
`

export default NavStyles
