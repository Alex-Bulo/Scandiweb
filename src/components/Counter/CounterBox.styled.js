import styled from "styled-components";

export const CounterBox = styled.section`
    height:100%;
    width:100%;
    margin-left:auto;

    display: flex;
    
    flex-direction:column;
    align-items:center;
    justify-content:space-between;

`
const CounterItems = styled.button`

height: ${props => props.loc === 'overlay' ? '24px' : '45px'};
width: ${props => props.loc === 'overlay' ? '24px' : '45px'};

background-color: #fff;

display: flex;

`
export const CounterBtn = styled(CounterItems)`
    border: 1px solid #000;

    &:hover{
        background-color: #e5e5e5;
        transition: all .5s ease-in-out forwards;
    }
`

export const Count = styled.div`
    display: flex;

    p{
        font-size: ${props => props.loc === 'overlay' ? '16px' : '24px'};
        font-family: 'Raleway Medium';
        font-weight: 500;
    }

`