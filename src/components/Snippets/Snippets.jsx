import React from "react";
import PropTypes from 'prop-types'; 

import "./Snippets.css";

export class Snippets extends React.Component {

  render() {
    const { images, name, mainImage, updateMainImage } = this.props;

    return (
          <aside className="Snippets">
            {images.map((image, i) => {
              return (
                <div
                  key={i}
                  className="snippet-container"
                  onClick={() => updateMainImage(i)}
                >
                  <img
                    src={image}
                    alt={`Preview of ${name}`}
                    className={`snippet ${i===mainImage && 'img-no-stock'}`}
                  />
                </div>
              );
            })}
          </aside>

      )
  }
}

Snippets.propTypes ={
  images: PropTypes.array.isRequired,
  name: PropTypes.string,
  mainImage: PropTypes.number,
  updateMainImage: PropTypes.func.isRequired,
}