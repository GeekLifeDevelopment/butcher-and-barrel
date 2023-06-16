import styled from "styled-components"

const LocationStyles = styled.div`
  .hero-section {
    height: 80vh;
    position: relative;

    .overlay {
      position: absolute;
      height: 80vh;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      /* z-index: 2; */
    }
  }

  img {
    height: 80vh;
    width: 100%;
    object-fit: cover;
  }

  .hero-content {
    color: white;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin: auto;
    transform: translateY(-50%);
    padding: 0 1rem;
    h1 {
      font-family: "PT Serif", serif;
      font-weight: 400;
      font-size: 4rem;
      margin: 0;
    }
  }
`

export default LocationStyles
