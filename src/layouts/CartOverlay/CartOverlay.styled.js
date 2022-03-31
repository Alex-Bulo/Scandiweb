import styled from "styled-components";
import { Switcher } from "../../components/styledComponents";

export const CartOverlayBox = styled(Switcher)`
  width: 325px;
  max-height: 540px;
  
  right:60px;



  .cart-overlay-title{
    align-self: flex-start;
    margin: 10px;
    margin-bottom: 25px;

    font-weight:700;
    font-family:'Raleway Bold';
    font-size:16px;
    
    span{
      font-weight:500;
      font-family:'Raleway Medium'
    }
  }

  .total-container{
    align-self: flex-start;
    
    margin:25px 0;
    padding: 0 10px;
    width:100%;

    font-weight:500;
    font-family:'Raleway Medium';

    display:flex;
    align-items:center;
    justify-content:space-between;
  }

  .overlay-ctas{
    width:100%;
    display: flex;
    justify-content:space-around;
  }

`

