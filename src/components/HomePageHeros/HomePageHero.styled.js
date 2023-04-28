import styled from "styled-components"

const HomePageHeroStyled = styled.section`
  position: relative;
  img {
    width: 100vw;
    height: 100vh;
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

    h1 {
      font-family: "PT Serif", serif;
      font-weight: 400;
      font-size: 4rem;
    }
  }
`

export default HomePageHeroStyled
