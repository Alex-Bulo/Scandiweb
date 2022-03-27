import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: calc(100vh - 80px);

  position: absolute;
  top: 80px;
  left: 0;

  background-color: rgba(0, 0, 0, ${props => props.op});
  
  opacity:0;
  animation: fade-in .3s ease-in-out .1s forwards;
`;
