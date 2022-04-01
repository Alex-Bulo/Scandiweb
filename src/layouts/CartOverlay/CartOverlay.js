import React from "react";
import CartItem from "../../components/CartItem/CartItem";
import PriceContainer from "../../components/Price/PriceContainer";
import { CTA, CTASecondary } from "../../components/styledComponents";
import CartContext from "../../services/context/cartContext";
import { addNavigationTo } from "../../services/helpers/helpers";
import { CartOverlayBox } from "./CartOverlay.styled";

class CartOverlay extends React.Component {
  static contextType = CartContext;

  render() {
    const { cartItems, cartTotal, addNewCartItem, deleteCartItem } =
      this.context;

    const priceInfo = cartItems.map((item) => {
      return { prices: item.prices, qty: item.qty };
    });

    return (
      <CartOverlayBox onClick={(e) => e.stopPropagation()}>
        {this.context.cartItems.length > 0 && (
          <>
            <div className="cart-overlay-title">
              <h2>
                My Bag, <span>{cartItems.length} different products</span>{" "}
              </h2>
            </div>
            <section className="cart-item-section">
              {cartItems.map((cartItem, i) => (
                <CartItem
                  key={`${cartItem.name}-${i}`}
                  item={cartItem}
                  addNewItem={addNewCartItem}
                  deleteItem={deleteCartItem}
                  loc='overlay'
                />
              ))}
            </section>

            <section className="total-container">
              <h3>Total</h3>
              <PriceContainer productsPriceInfo={priceInfo} />
            </section>

            <div className="overlay-ctas">
              <CTASecondary
                width={"50%"}
                onClick={() => this.props.navigate("/cart")}
              >
                View bag
              </CTASecondary>
              <CTA
                width={"50%"}
                onClick={() => alert("checkout msg with prices calculated")}
              >
                Checkout
              </CTA>
            </div>
          </>
        )}
      </CartOverlayBox>
    );
  }
}

export default addNavigationTo(CartOverlay);
