import styled from "styled-components"

const HomePageHeroStyled = styled.section`
  position: relative;
  margin-bottom: 0;
  width: 100vw;
  height: 100vh;

  img {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    object-fit: cover;
  }
  .overlay {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .hero-content {
    color: ${props => props.theme.colors.white};
    text-align: center;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin: auto;
    transform: translateY(-50%);
    padding: 0 1rem;

    .hero-title {
      animation: show 0.7s linear normal;
    }

    @keyframes show {
      0% {
        margin-top: -180px;
      }
      5% {
        margin-top: -160px;
      }
    }

    h1 {
      font-family: "PT Serif", serif;
      font-weight: 400;
      font-size: 4rem;
      margin: 0;
    }

    .sub-title {
      max-width: 545px;
      margin: 0 auto;
      font-family: "Inter", sans-serif;
      font-weight: 100;
      font-size: 1.2rem;
      animation: sub-animate 0.5s linear normal;
    }

    @keyframes sub-animate {
      0% {
        margin-top: -180px;
      }
      5% {
        margin-top: -160px;
      }
    }

    .sub-description {
      font-family: "Inter", sans-serif;
      font-weight: 100;
      font-size: 1rem;
      padding: 0;
      text-transform: uppercase;
      letter-spacing: 5px;
      animation: dec-animate 0.5s linear normal;
    }
    @keyframes dec-animate {
      20% {
        margin-top: -160px;
      }
      25% {
        margin-top: -140px;
      }
    }
  }
`

export default HomePageHeroStyled
