import styled from "styled-components";
import { Switcher } from "../../../components/styledComponents";

export const CurrencySwitcher = styled(Switcher)`
  width: 114px;
  left: ${props => (props.x-57)+'px'};
  top:-15px;
`

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