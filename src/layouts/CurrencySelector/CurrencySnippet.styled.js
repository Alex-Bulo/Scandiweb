import React from "react";
// import "./CurrencySnippet.css";
import styled from "styled-components";

export const BoxOfCurrencies = styled.section`
  width: 114px;
  position: absolute;
  left: ${props => (props.x-57)+'px'};

  background-color: #fff;
  filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, .19));

  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
`;

export const AvailableCurrency = styled.article`
    width: 100%;
    height: 30px;

    margin: 5px;

    display: flex;
    align-items:center;
    justify-content:center;

    
    font-weight: 500;
    text-align:center;
    
    cursor: pointer;
    
    &:hover{
      background-color: rgba(0, 0, 0, .05);
    }

`