import React from "react";

import {
  PriceContainer,
  CartItem,
  PopUpContainer,
  PurchaseOrder,
} from "../../components";

import { CartContext } from "../../services";

import "./CartPage.css";
import { CTA } from "../../components/styledComponents";

class CartPage extends React.Component {
  static contextType = CartContext;
  constructor(props) {
    super(props);
    this.state = { order: null };
    this.checkoutHandler = this.checkoutHandler.bind(this);
    this.confirmCheckoutHandler = this.confirmCheckoutHandler.bind(this);
  }

  checkoutHandler() {
    const purchaseOrder = this.context.checkout();
    this.setState({ order: purchaseOrder });
  }

  confirmCheckoutHandler() {
    this.context.emptyCart();
    this.setState({ order: null });
  }

  render() {
    const { cartItems, addNewCartItem, deleteCartItem } = this.context;

    const priceInfo = cartItems.map((item) => {
      return { prices: item.prices, qty: item.qty };
    });

    return (
      cartItems && (
        <main className="CartPage">
          <section className="CP-top">
            <h1 className="CP-title">Cart</h1>
            <PriceContainer productsPriceInfo={priceInfo} />
            <CTA width={"30%"} onClick={this.checkoutHandler}>
              Checkout
            </CTA>
          </section>
          <section className="CP-items-container">
            {cartItems.map((cartItem, i) => (
              <CartItem
                key={`${cartItem.name}-${i}`}
                item={cartItem}
                addNewItem={addNewCartItem}
                deleteItem={deleteCartItem}
                loc="page"
              />
            ))}
          </section>

          {this.state.order && (
            <PopUpContainer
              op={0.2}
              clickHandler={() => this.setState({ order: false })}
            >
              <PurchaseOrder
                order={this.state.order}
                closeHandler={() => this.setState({ order: false })}
                confirmHandler={this.confirmCheckoutHandler}
              />
            </PopUpContainer>
          )}
        </main>
      )
    );
  }
}

export default CartPage;
