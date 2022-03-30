import React from "react";
import { validateNewCartItem } from "../helpers/helpers";

const CartContext = React.createContext();

export const CartConsumer = CartContext.Consumer;

export class CartProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cartItems: [], cartTotal: null };
    this.newCartItemHandler = this.newCartItemHandler.bind(this);
    this.deleteCartItemHandler = this.deleteCartItemHandler.bind(this);
  }

  componentDidMount() {
    this.setState({ cartItems: [], cartTotal: 0 });
  }

  newCartItemHandler(cartItem) {
    console.log("adding", cartItem);
    let newCart;
    if (this.state.cartItems.length === 0) {
      newCart = [...this.state.cartItems, cartItem];
    } else {
      // const restOfProducts = this.state.cartItems.filter(
      //   (item) => item.id !== cartItem.id
      // );
      // const sameProducts = this.state.cartItems.filter(
      //   (item) => item.id === cartItem.id
      // );
      // console.log("SAMEPRODUCTS ", sameProducts);

      // const newAttributes = cartItem.selectedAttributes.map((attribute) => {
      //   return {
      //     productID: cartItem.id,
      //     id: attribute.items.id,
      //     attributeID: attribute.attributeID,
      //   };
      // });
      // console.log("NEWATTRIBUTES ", newAttributes);

      // const sameAttribute = sameProducts.map((product) =>
      //   product.selectedAttributes.map((attribute) => {
      //     return { productID:product.id, id: attribute.items.id, attributeID: attribute.attributeID };
      //   })
      // ).flat().sort((a,b)=>a-b)
      // console.log("SAMEATTRIBUTE ", sameAttribute);
      
      newCart = [...this.state.cartItems, cartItem];
    }

    const newTotal = newCart.reduce((prev, curr) => prev + curr.qty, 0);
    this.setState({ cartItems: newCart, cartTotal: newTotal });
  }

  deleteCartItemHandler(cartItemId) {
    console.log("deleting ", cartItemId);
    const newCart = this.state.cartItems.filter(
      (item) => item.id !== cartItemId
    );
    const newTotal = newCart.reduce((prev, curr) => prev + curr.qty, 0);

    this.setState({ cartItems: newCart, cartTotal: newTotal });
  }

  render() {
    return (
      <CartContext.Provider
        value={{
          cartItems: this.state.cartItems,
          cartTotal: this.state.cartTotal,
          addNewCartItem: this.newCartItemHandler,
          deleteCartItem: this.deleteCartItemHandler,
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export default CartContext;
