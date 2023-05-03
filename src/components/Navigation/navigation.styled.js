import styled from "styled-components"

const NavStyles = styled.nav`
  .nav-container {
    position: fixed;
    z-index: 10;
    width: 100%;
  }
  .nav-header {
    background-color: ${props => props.navHeaderBackground};
    padding: 1rem 0;
    text-align: center;
    color: ${props => props.theme.colors.butcherOrange};
    transition: 1s;

    p {
      margin: 0 auto;
      max-width: 80%;
    }
  }

  .main-nav {
    width: 100%;
    /* position: fixed; */
    display: flex;
    align-items: center;
    margin: 0;
    background-color: ${props => props.backgroundColor};
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    transition: 1s;
  }
  .butcher-logo {
    width: 15%;
    list-style-type: none;
    padding: 0.5rem;
    margin: 0;
    img {
      width: 60px;
    }
  }

  .main-links {
    font-size: 12px;
    width: 60%;
    color: ${props => props.colors};
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
    font-size: 1.5rem;
    display: none;
    text-align: right;
    justify-self: right;
    color: ${props => props.colors};
    @media (max-width: 700px) {
      display: block;
    }
  }

  .mobile-nav {
    position: fixed;
    left: ${props => props.navView};
    color: white;
    z-index: 12;
    top: 0;
    font-size: 1.5rem;
    transition: 0.5s;

    ul {
      background-color: rgba(0, 0, 0, 0.8);
      width: 200px;
      height: 100%;
      padding: 2rem;
      list-style-type: none;
      margin: 0;
      li {
        margin-bottom: 1.5rem;
      }
    }
  }
`

export default NavStyles
