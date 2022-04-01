import React from "react";
import CartItem from "../../components/CartItem/CartItem";
import PriceContainer from "../../components/Price/PriceContainer";
import { CTA } from "../../components/styledComponents";
import CartContext from "../../services/context/cartContext";
import "./CartPage.css";

class CartPage extends React.Component {
  static contextType = CartContext;

  render() {
    const { cartItems, addNewCartItem, deleteCartItem } =
      this.context;

    const priceInfo = cartItems.map((item) => {
      return { prices: item.prices, qty: item.qty };
    });

    return (
      cartItems && (
        <main className="CartPage">
          <section className='CP-top'>
            <h1 className="CP-title">Cart</h1>
            <PriceContainer productsPriceInfo={priceInfo} />
            <CTA
              width={"30%"}
              onClick={() => alert("checkout msg with prices calculated")}
            >
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
                  loc='page'
                />
              ))}
        </section>
        
        </main>
      )
    );
  }
}

export default CartPage;
