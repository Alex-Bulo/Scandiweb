import styled from "styled-components";

export const CartItemBox = styled.article`
  padding: 2px 0;
  margin-top: 2px 0;

  width: 100%;
  height: ${(props) => (props.loc === "overlay" ? "135px" : "185px")};

  border-top: 1px solid rgba(229, 229, 229, 1);

  display: flex;
  flex-direction: row;

  overflow:hidden;
  .cart-attributes {

    display: flex;
    overflow-x: scroll;
    
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .cart-attributes::-webkit-scrollbar {
    display: none;
  }
  .carrousel-container {
    width: 35%;
  }
`;

export const ItemDetails = styled.div`
    width:50%;
    
    margin-right: auto;
    display: flex;
    flex-direction:column;
    justify-content:space-around;
  
    h3 {
    font-family: "Raleway Light";
    font-weight: 300;
  }
`;
