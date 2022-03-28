import React from "react";
import Carrousel from "../Carrousel/Carrousel";
import "./ProductPreview.css";

class ProductPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: null, category: null };
  }

  componentDidMount() {
    //   const {id, brand, name} = this.props.product
  }

  render() {
    return (
      <article
        className="ProductPreview"
        onClick={() =>
          this.props.product.inStock
            ? console.log("Hay Click")
            : console.log("No hay click")
        }
      >
        <Carrousel images={this.props.product.gallery} name={this.props.product.name} current={0}/>
        <h2 className="preview-title">{this.props.product.brand} - {this.props.product.name}</h2>
      </article>
    );
  }
}

export default ProductPreview;
