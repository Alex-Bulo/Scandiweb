import React from "react";
import CurrencyContext from "../../services/context/currencyContext";
import Carrousel from "../Carrousel/Carrousel";
import Price from "../Price/Price";
import "./ProductPreview.css";

class ProductPreview extends React.Component {
  static contextType = CurrencyContext;
  constructor(props) {
    super(props);
    this.state = { active: null, qty: null, selectedAttribute: null };
    this.enableProductHandler = this.enableProductHandler.bind(this)
  }

  componentDidMount(){
    this.setState({active:false, qty:1, selectedAttribute:0})

  }

  enableProductHandler (){
    this.props.product.inStock && this.setState({...this.state, active:true})
  }



  render() {
    
    const { inStock, name, brand, prices, gallery } = this.props.product;
    const {active, qty, selectedAttribute} = this.state

    return (
      this.context.selectedCurrency && (
        <article
          className={`ProductPreview ${!inStock ? "without-stock" : ""} ${active ? 'enabled-product':''}`}
          onClick={()=>this.enableProductHandler()}
          onMouseEnter={()=>this.enableProductHandler()}
          onMouseLeave={()=>this.setState({...this.state,active:false})}
        >
          <Carrousel
            inStock={inStock}
            images={gallery}
            name={name}
            current={0}
          />

          <section className="preview-content">
            <h2 className="preview-title">
              {brand} - {name}
            </h2>
            <Price
              prices={prices}
              qty={qty}
              currency={this.context.selectedCurrency.label}
            />
          </section>
        </article>
      )
    );
  }
}

export default ProductPreview;
