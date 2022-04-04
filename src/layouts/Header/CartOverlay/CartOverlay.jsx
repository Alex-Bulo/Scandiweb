import React from "react";

import {CartItem, PopUpContainer, PriceContainer, PurchaseOrder} from "../../../components";

import {CartContext, addNavigationTo} from "../../../services";

import { CTA, CTASecondary } from "../../../components/styledComponents";
import { CartOverlayBox } from "./CartOverlay.styled";

class CartOverlay extends React.Component {
  static contextType = CartContext;
  constructor(props) {
    super(props);
    this.goToCartHandler = this.goToCartHandler.bind(this);
  }

  goToCartHandler() {
    this.props.clickHandler();
    this.props.navigate("/cart");
  }

  render() {
    const { cartItems, addNewCartItem, deleteCartItem } = this.context;

    const priceInfo = cartItems.map((item) => {
      return { prices: item.prices, qty: item.qty };
    });

    return (
      <CartOverlayBox onClick={(e) => e.stopPropagation()}>
        <div className="cart-overlay-title">
          <h2>
            My Bag, <span>{cartItems.length} different products</span>{" "}
          </h2>
        </div>
        {this.context.cartItems.length > 0 && (
          <>
            <section className="cart-item-section">
              {cartItems.map((cartItem, i) => (
                <CartItem
                  key={`${cartItem.name}-${i}`}
                  item={cartItem}
                  addNewItem={addNewCartItem}
                  deleteItem={deleteCartItem}
                  loc="overlay"
                />
              ))}
            </section>

            <section className="total-container">
              <h3>Total</h3>
              <PriceContainer productsPriceInfo={priceInfo} />
            </section>
          </>
        )}
        <div className="overlay-ctas">
          <CTASecondary width={"50%"} onClick={this.goToCartHandler}>
            View bag
          </CTASecondary>
          <CTA
            width={"50%"}
            onClick={this.props.checkout}
          >
            Checkout
          </CTA>
        </div>

      </CartOverlayBox>
    
    );
  }
}

export default addNavigationTo(CartOverlay);
