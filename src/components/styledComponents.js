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
