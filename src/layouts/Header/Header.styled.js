import { render } from "@testing-library/react";
import React from "react";
import styled from "styled-components";

const Option = styled.div`
  width: 40px;
  margin-right: 10px;

  font-weight: 500;
  font-size: 18px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

class NavOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = { optionLocation: null };
    this.myPicker = React.createRef();
  }
  componentDidMount(){
    this.props.getMiddlePosition(this.myPicker.current.getBoundingClientRect().x +
    this.myPicker.current.getBoundingClientRect().width / 2)
}



  render() {
    return (
        <Option ref={this.myPicker} onClick={this.props.clickHandler}>
            {this.props.children}
        </Option>
    );
  }
}

export default NavOption;
