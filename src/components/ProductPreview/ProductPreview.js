import React from "react";
import CartContext from "../../services/context/cartContext";
import Carrousel from "../Carrousel/Carrousel";
import PriceContainer from "../Price/PriceContainer";
import Attributes from "../Attributes/Attributes";
import "./ProductPreview.css";
import cartIcn from "../../assets/icons/white-cart.svg";
import { validateNewCartItem } from "../../services/helpers/helpers";
class ProductPreview extends React.Component {
  static contextType = CartContext;
  constructor(props) {
    super(props);
    this.state = { active: null, qty: null, selectedAttributes: null, errors:null };
    this.enableProductHandler = this.enableProductHandler.bind(this);
    this.selectAttributeHandler = this.selectAttributeHandler.bind(this);
    this.addToCartHandler = this.addToCartHandler.bind(this)
  }


  componentDidMount() {
    this.setState({ active: false, qty: 1, selectedAttributes: [], errors:false});
  }

  enableProductHandler() {
    this.props.product.inStock &&
      this.setState({ ...this.state, active: !this.state.active });
  }

  selectAttributeHandler(newSelectedAttributes){
    this.setState({...this.state, selectedAttributes:newSelectedAttributes})
  }

  addToCartHandler(){
    const isCorrect = validateNewCartItem(this.props.product, this.state.qty, this.state.selectedAttributes)
    
    if(isCorrect){
      console.log('OK 2');
    }else{
      this.setState({...this.state,errors:true})

    }

  }

  render() {
    const { inStock, name, brand, prices, gallery, attributes } = this.props.product;
    const { active, qty, selectedAttributes } = this.state;

    return (
        <article
          className={`ProductPreview ${!inStock ? "without-stock" : ""} ${
            active ? "enabled-product" : ""
          }`}
          onMouseEnter={() => this.enableProductHandler()}
          // onClick={() => alert("buy")}
          onMouseLeave={() => this.setState({ ...this.state, active: false, errors:false })}
        >
          <Carrousel
            inStock={inStock}
            images={gallery}
            name={name}
            current={0}
          />

          <section className="preview-content">
            <h2 className="preview-title">
              {" "}
              {brand} - {name}{" "}
            </h2>
            <PriceContainer
              prices={prices}
              qty={qty}
            />
          </section>

          {active && (
            <>
              <section
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className="cta-primary add-cart-container"
                  onClick={this.addToCartHandler}
                >
                  <img
                    src={cartIcn}
                    alt="Add to cart button"
                    className="add-cart-icon"
                  />
                </div>
              </section>

              <section className="preview-choices">
                {attributes.map((attribute) => (
                  <Attributes
                    key={attribute.id}
                    attribute={attribute}
                    selectedAttributes={selectedAttributes}
                    selectHandler={this.selectAttributeHandler}
                  />
                ))}
              </section>
              {this.state.errors && <p className="error plp-error">Please select an option</p>}
            </>
          )}
        </article>
      )
  }
}

export default ProductPreview;
