import styled from "styled-components"

const FooterStyles = styled.footer`
  color: white;
  background-color: black;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  hr {
    border: 1px solid rgba(51, 51, 51, 70);
  }

  .footer-container {
    display: flex;
    max-width: 1000px;
    margin: 0 auto;
    padding: 1rem 0;
    justify-content: space-around;

    ul {
      padding: 0;
      margin: 0.5rem 0;
      li {
        list-style-type: none;
        font-size: 14px;
      }
    }

    a {
      color: white;
      text-decoration: none;
      transition: 0.5s;
      &:hover {
        color: ${props => props.theme.colors.butcherOrange};
        text-decoration: underline;
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 2rem;
    }
  }

  .logo-section {
    img {
      max-width: 120px;
    }
  }

  .contact-section {
    li {
    }
  }

  .social {
    display: flex;
    gap: 20px;
  }

  .gift-card {
    font-size: 14px;
  }

  .hour-section {
  }

  .employment-section {
    max-width: 300px;
  }

  .trademark {
    text-align: center;
    padding: 1rem 0;
    margin: 0;
  }
`

export default FooterStyles
