import React from "react";

import { parseHTML } from "../../services";
import "./DescriptionContainer.css";

export class DescriptionContainer extends React.Component {

  render() {

      const reactElements = parseHTML(this.props.description)

    return <section className="container description-container">
        {reactElements}
    </section>;
  }
}


