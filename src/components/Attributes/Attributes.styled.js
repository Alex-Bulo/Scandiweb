import styled from "styled-components";


const OptionBox = styled.div`
    margin: 3px 5px;
    width: 60px;
    height: 30px;
    font-weight: 400;
    /* font-size: 14px; */
    display: flex;
    justify-content:center;
    align-items:center;
    
    p{
        text-align:center;
        font-size: 13px;

    }
`


export const AttributeOption = styled(OptionBox)`

  border: 1px solid #000;
  
  background-color: ${props => props.type==='swatch' ? props.value : 'var(--bkg-color)'};
  color: var(--primary-font-color);
  opacity:.7;
  
  
  /* transition: opacity .5s ease-in-out */
  &:hover{
      opacity:.9;
      transition: opacity .5s ease-in-out
    }
    `;

export const AttributeSelected = styled(OptionBox)`

background-color: ${props => props.type==='swatch' ? props.value : 'var(--selected-bkg-color)'};
  color: var(--accent-font-color);

  border: 2px solid var(--accent-bkg-color);  

  opacity:1;
  
  
  display: flex;
`;
