import React from "react";
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
        {this.props.product.brand} - {this.props.product.name}
      </article>
    );
  }
}

export default ProductPreview;
