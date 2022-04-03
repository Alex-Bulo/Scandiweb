import React from "react";

import {Snippets} from "../../components";

import "./Carrousel.css";

export class Carrousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mainImage: null };
    this.previousPicHandler = this.previousPicHandler.bind(this);
    this.nextPicHandler = this.nextPicHandler.bind(this);
  }

  componentDidMount() {
    this.setState({ mainImage: 0 });
  }

  previousPicHandler(e) {
    e.stopPropagation();
    const { mainImage } = this.state;
    const lastImage = this.props.images.length - 1;

    if (mainImage <= 0) {
      this.setState({ mainImage: lastImage });
    } else {
      this.setState({ mainImage: mainImage - 1 });
    }
  }

  nextPicHandler(e) {
    e.stopPropagation();
    const { mainImage } = this.state;
    const lastImage = this.props.images.length - 1;

    if (mainImage >= lastImage) {
      this.setState({ mainImage: 0 });
    } else {
      this.setState({ mainImage: mainImage + 1 });
    }
  }

  render() {
    const { images, name, inStock, hasSnippets } = this.props;

    return (
      this.state.mainImage >= 0 && (
        <section className="carrousel-container">
          {hasSnippets && (
            <Snippets
              images={images}
              name={name}
              mainImage={this.state.mainImage}
              updateMainImage={(image) => this.setState({ mainImage: image })}
            />
          )}

          {images[this.state.mainImage] && (
            <article className={`Carrousel ${!inStock ? "img-no-stock" : ""}`}>
              {!inStock && <p className="stock-msg">OUT OF STOCK</p>}
              <div
                className="moving-icn moving-prev"
                onClick={this.previousPicHandler}
              >
                <i>{"<"}</i>
              </div>

              <img
                src={this.props.images[this.state.mainImage]}
                alt={`${name}`}
                className="carrousel-image"
              />

              <div
                className="moving-icn moving-next"
                onClick={this.nextPicHandler}
              >
                <i>{">"}</i>
              </div>
            </article>
          )}

          {!this.props.images[this.state.mainImage] && (
            <article className="Carrousel no-image">
              <p>No image available</p>
            </article>
          )}
        </section>
      )
    );
  }
}