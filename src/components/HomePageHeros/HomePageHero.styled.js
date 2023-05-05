import styled from "styled-components"

const HomePageHeroStyled = styled.section`
  position: relative;
  margin-bottom: 0;
  display: block;
  width: 100vw;
  height: 100vh;

  .pic {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    ${props => (props.heroImage2 ? `animation: fade 24s infinite;` : "")}
  }

  #image1 {
    animation-delay: 0s;
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url(${props => props.heroImage});
  }

  #image2 {
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url(${props => props.heroImage2});
    animation-delay: 8s;
  }

  #image3 {
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url(${props => props.heroImage3});
    animation-delay: 16s;
  }

  @keyframes fade {
    0% {
      opacity: 1;
    }
    20% {
      opacity: 1;
    }
    34% {
      opacity: 0;
    }
    88% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  img {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    object-fit: cover;
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
    @media (max-width: 570px) {
      top: 60%;
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

    .sub-description {
      font-family: "Inter", sans-serif;
      font-weight: 100;
      font-size: 1rem;
      padding: 0;
      text-transform: uppercase;
      letter-spacing: 5px;
      animation: dec-animate 0.5s linear normal;
    }

    .marquee {
      height: 50px;
      overflow: hidden;
      position: relative;
      margin: 4rem 0;
      color: white;
      /* border: 1px solid #4a4a4a; */
      border-top: 1px solid rgba(255, 255, 255, 0.4);
      border-bottom: 1px solid rgba(255, 255, 255, 0.4);

      p {
        position: absolute;
        width: 100%;
        height: 100%;
        margin: 0;
        line-height: 50px;
        text-align: center;
        -moz-transform: translateX(100%);
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
        -moz-animation: scroll-left 2s linear infinite;
        -webkit-animation: scroll-left 2s linear infinite;
        animation: scroll-left 20s linear infinite;
      }
    }
    @keyframes scroll-left {
      0% {
        -moz-transform: translateX(100%);
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
      }
      100% {
        -moz-transform: translateX(-100%);
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
      }
    }
  }
`

export default HomePageHeroStyled
