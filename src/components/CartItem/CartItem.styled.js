import styled from "styled-components";

export const CartItemBox = styled.article`
  padding: 2px 0;
  margin-top: 1px;

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
    div{
      cursor:default;
    }
  }
  .cart-attributes::-webkit-scrollbar {
    display: none;
  }
  .carrousel-container {
    margin: ${(props) => (props.loc === "overlay" ? "auto" : "none")};
    margin-left: ${(props) => (props.loc !== "overlay" && "20px")};

    width: ${(props) => (props.loc === "overlay" ? "35%" : "10%")};
  }
  .Price{
    margin-left: 0 !important;
  }
`;

export const ItemDetails = styled.div`
    width:50%;
    
    margin-right: auto;
    display: flex;
    flex-direction:column;
    justify-content:space-around;
    
    h3 {     
    font-size: ${(props) => (props.loc === "overlay" ? "16px" : "30px")};;
    font-family: ${(props) => (props.loc === "overlay" ? "Raleway Light" : "Raleway SemiBold")};;
    font-weight: ${(props) => (props.loc === "overlay" ? "300" : "600")};;
  }
    h3 span{     
    font-size: ${(props) => (props.loc !== "overlay" && "30px")};;
    font-family: ${(props) => (props.loc !== "overlay" && "Raleway Regular")};;
    font-weight: ${(props) => (props.loc !== "overlay" && "400")};;
  }
`;
