import React from "react";

import {Attributes, Carrousel, PriceContainer} from "../../components";

import { CartContext, addNavigationTo, validateNewCartItem, getProductById, getHTMLElements } from "../../services";

import "./ProductPage.css";
import { CTA } from "../../components/styledComponents";
import { ItemDetails } from "../../components/CartItem/CartItem.styled";

class ProductPage extends React.Component {
  static contextType = CartContext

  constructor(props) {
    super(props);
    this.state = { product: null, selectedAttributes: null, qty: null, errors:null };
    this.selectAttributeHandler = this.selectAttributeHandler.bind(this);
    this.addToCartHandler = this.addToCartHandler.bind(this);
    this.description = React.createRef();
  }

  async componentDidMount() {
    const id = this.props.params.id;

    const newProduct = await getProductById(id);

    if(newProduct === 'error'){
      this.props.navigate('/error')
    }else{

      this.setState({ product: newProduct, selectedAttributes: [], qty: 0, errors:false });
    }
    
    const newElements = getHTMLElements(newProduct.description)

    this.description.current.innerHTML = newElements.innerHTML  
  }

  selectAttributeHandler(newSelectedAttributes) {
    this.setState({ ...this.state, selectedAttributes: newSelectedAttributes, errors:false });
  }

  addToCartHandler(){

    this.setState({...this.state,errors:false})
    const newCartItem = validateNewCartItem(this.state.product, this.state.qty, this.state.selectedAttributes)
    
    if(typeof newCartItem === 'string'){
      this.setState({...this.state,errors:newCartItem})
    }else{
      this.context.addNewCartItem(newCartItem)
    }

  }

  render() {
    const { product, qty, selectedAttributes } = this.state;

    return (
      product && (
        <main className="ProductPage">
          <Carrousel
            inStock={product.inStock}
            images={product.gallery}
            name={product.name}
            hasSnippets={true}
          ></Carrousel>

          <ItemDetails classname="pdp-details" loc="pdp">
            <h3 className="pdp-title">
              {product.brand}
              <br />
              <span>{product.name}</span>
            </h3>

            <div className="container pdp-attributes">
              {product.attributes.map((attribute) => (
                <Attributes
                  key={attribute.id}
                  attribute={attribute}
                  selectedAttributes={selectedAttributes}
                  selectHandler={this.selectAttributeHandler}
                />
              ))}
            </div>

            <div className="container price-container">
              <h4 className="price-title">Price:</h4>
              <PriceContainer
                productsPriceInfo={[{ prices: product.prices, qty: qty }]}
              />
            </div>
            <div className="container cta-container">
              <CTA
                width={"80%"}
                onClick={this.addToCartHandler}
              >
                Add to cart
              </CTA>
            {this.state.errors && <p className="error pdp-error">{this.state.errors}</p>}
            </div>


            <section ref={this.description} className="container description-container"/>

          </ItemDetails>
        </main>
      )
    );
  }
}

export default addNavigationTo(ProductPage);
