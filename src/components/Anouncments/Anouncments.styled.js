import styled from "styled-components"

const AnouncmentStyles = styled.section`
  margin-top: ${props => props.isOpen};
  color: ${props => props.theme.colors.butcherOrange};
  background-color: grey;
  padding: 1rem;
  transition: 1s;

  .banner-content {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 10% 80% 10%;
    align-items: center;

    .text-content {
      text-align: center;
    }

    .close-btn {
      color: red;
      .fa-solid fa-x {
        color: white;
        text-align: right;
      }
    }
  }
`

export default AnouncmentStyles
