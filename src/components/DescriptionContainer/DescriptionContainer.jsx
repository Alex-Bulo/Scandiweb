import React from "react";
import JsxParser from "react-jsx-parser";

import "./DescriptionContainer.css";

class DescriptionContainer extends React.Component {

  render() {

    return <section className="container description-container">
        <JsxParser jsx={this.props.description}/>
    </section>;
  }
}

export default DescriptionContainer;
