import styled from "styled-components"

const ButtonStyles = styled.a`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  letter-spacing: 5px;
  color: ${props => props.theme.colors.black};
  text-decoration: none;
  background-color: ${props => props.theme.colors.white};
  border-radius: 5px;
  padding: 0.5rem;
  text-align: center;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.butcherOrange};
  }
`

export default ButtonStyles
