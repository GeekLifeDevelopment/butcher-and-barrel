import styled from "styled-components"

const MenuItemStyles = styled.div`
  .menu-item-container {
    /* position: relative; */
    width: 250px;
    padding: 1rem;
    z-index: 5;

    img {
      position: relative;
      width: 230px;
      height: 150px;
      object-fit: cover;
      border-radius: 5%;
    }

    .menu-image-container {
      position: relative;
    }
  }

  .price {
    position: absolute;
    border-color: ${props => props.theme.colors.butcherOrange};
    background-color: ${props => props.theme.colors.butcherOrange};
    border-radius: 50%;
    color: white;
    width: 25px;
    height: 25px;
    padding: .5rem;
    font-size: 14px;
    text-align: center;
    bottom: -15px;
    left: 50%;
    margin-left: -21px;
    line-height: 1px;
  }
  butcherOrange
`
export default MenuItemStyles
