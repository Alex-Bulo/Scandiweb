import React from "react";

import styled from "styled-components";

const BackgroundAll = styled.div`
  width: 100%;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  z-index:1;
  
  opacity: 0;
  animation: fade-in 0.3s ease-in-out 0.1s forwards;
`;

const BackgroundBody = styled.div`
  width: 100%;
  height: calc(100vh - 80px);

  position: absolute;
  top: 80px;
  left: 0;

  background-color: rgba(0, 0, 0, ${(props) => props.op});

  opacity: 0;
  animation: fade-in 0.3s ease-in-out 0.1s forwards;
`;

export class PopUpContainer extends React.Component {
  render() {
    return (
      <BackgroundAll onClick={this.props.clickHandler}>
        <BackgroundBody op={this.props.op}>
          {this.props.children}
        </BackgroundBody>
      </BackgroundAll>
    );
  }
}
