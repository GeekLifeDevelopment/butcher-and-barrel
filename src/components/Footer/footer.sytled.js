import styled from "styled-components"

const FooterStyles = styled.footer`
  color: white;
  background-color: black;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  .footer-container {
    display: flex;
    max-width: 1000px;
    margin: 0 auto;
    padding: 1rem 0;
    justify-content: space-around;

    ul {
      padding: 0;
      li {
        list-style-type: none;
        font-size: 14px;
      }
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
