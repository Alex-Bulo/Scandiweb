import styled from "styled-components"


export const CartItemBox = styled.article`
    width:100%;
    height: ${(props)=>props.loc==='overlay'?'135px':'185px'};
    
    border-top: 1px solid rgba(229, 229, 229, 1);
    
    display: flex;
    flex-direction:row;

    
    `

export const ItemDetails = styled.div`
    h3{
        font-family: 'Raleway Light';
        font-weight:300;
    }
    /* color:blue; */
`