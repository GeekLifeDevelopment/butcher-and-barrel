import styled from "styled-components"

const NavStyles = styled.nav`
  .main-nav {
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
    font-size: 1.5rem;
    display: none;
    text-align: right;
    justify-self: right;
    color: white;
    @media (max-width: 700px) {
      display: block;
    }
  }

  .mobile-nav {
    position: absolute;
    left: ${props => props.navView};
    color: white;
    z-index: 9;
    top: 63px;
    font-size: 2rem;
    transition: 0.5s;

    ul {
      background-color: rgba(0, 0, 0, 0.8);
      width: 200px;
      height: 100%;
      padding: 2rem;
      list-style-type: none;
      li {
        margin-bottom: 1.5rem;
      }
    }
  }
`

export default NavStyles
