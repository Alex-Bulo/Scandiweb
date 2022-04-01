import styled from "styled-components";

export const CounterBox = styled.div`
    height:100%;
    max-width:45px;
    /* width: ${props => props.loc === 'overlay' ? '34px' : '55px'}; */
    /* margin-left:auto; */

    display: flex;
    flex-direction:column;
    align-items:flex-end;
    justify-content:space-around;

`
const CounterItems = styled.button`

height: ${props => props.loc === 'overlay' ? '24px' : '45px'};
width: ${props => props.loc === 'overlay' ? '24px' : '45px'};

background-color: #fff;

display: flex;
justify-content:center;
align-items:center;

cursor: pointer;
`
export const CounterBtn = styled(CounterItems)`
    border: 1px solid #000;

    img{
        width:75%;
    }

    &:hover{
        background-color: #e5e5e5;
        transition: all .5s ease-in-out forwards;
    }
`

export const Count = styled.div`
    width:100%;

    display: flex;
    align-items:center;
    justify-content:center;

    p{
        font-size: ${props => props.loc === 'overlay' ? '16px' : '24px'};
        font-family: 'Raleway Medium';
        font-weight: 500;
    }

`