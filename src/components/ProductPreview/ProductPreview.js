import React from "react";
import CurrencyContext from "../../services/context/currencyContext";
import Carrousel from "../Carrousel/Carrousel";
import Price from "../Price/Price";
import "./ProductPreview.css";

class ProductPreview extends React.Component {
  static contextType = CurrencyContext;


  render() {
    const {inStock} = this.props.product
    return (
      this.context.selectedCurrency && (
        <article
          className={`ProductPreview ${!inStock ? 'without-stock' : ''}`}
          onClick={() => inStock ? console.log('si') : console.log('No') }
        >
          <Carrousel
            inStock={inStock}
            images={this.props.product.gallery}
            name={this.props.product.name}
            current={0}
          />

          <section className="preview-content">
            <h2 className="preview-title">
              {this.props.product.brand} - {this.props.product.name}
            </h2>
            <Price
              prices={this.props.product.prices}
              qty={1}
              currency={this.context.selectedCurrency.label}
            />
          </section>
        </article>
      )
    );
  }
}

export default ProductPreview;
