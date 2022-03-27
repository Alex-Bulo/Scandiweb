import React from "react";
import styled from "styled-components";

const Background = styled.div`
  width: 100vw;
  height: calc(100vh - 80px);

  position: absolute;
  top: 80px;
  left: 0;

  background-color: rgba(0, 0, 0, ${props => props.op});
`;

class PopUpContainer extends React.Component {
    // constructor(props){

    // }
    render() {
      console.log(this.props.children);
    return <Background>
        {this.props.children}
    </Background>;
  }
}

export default PopUpContainer;
