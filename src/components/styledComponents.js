import styled from "styled-components";


export const Switcher = styled.section`
  width: 100px;
  position: absolute;

  background-color: #fff;
  filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, .19));

  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  
  opacity:0;
  
  animation: fade-in .8s ease-in-out .2s forwards;
`;

export const Button = styled.button`
  margin: 10px;

  height:50px;
  width:${(props)=> props.width ? props.width : '100%'};

  font-weight: 600;
  font-family:'Raleway SemiBold';
  font-size: 16px;

  text-transform: uppercase;
  cursor: pointer;
  `

export const CTA = styled(Button)`
  background-color: var(--accent-bkg-color);
  color:var(--accent-font-color);
  
  border:none;
  
  &:hover{
    filter: brightness(1.1);
    transition: all .4s ease-in-out; 
    border: 1px solid #000;
  }
  `

export const CTASecondary = styled(Button)`
  background-color: var(--bkg-color);
  color:var(--primary-font-color);
  
  border: 1px solid #000;
  
  &:hover{
    filter: brightness(.95);
    border: 2px solid #000;
    transition: all .4s ease-in-out; 
  }
`

