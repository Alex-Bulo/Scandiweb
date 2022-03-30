import React from "react";
import { compareAttributes, validateNewCartItem } from "../helpers/helpers";

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
    if (this.state.cartItems.length === 0) {
      this.setState({ cartItems:[cartItem], cartTotal:cartItem.qty });
      return;
    }

    let newCart;
    const sameItemsInCart = this.state.cartItems.filter(
      (item) => item.id === cartItem.id
    );

    if (sameItemsInCart.length === 0) {
      newCart = [...this.state.cartItems, cartItem];
    } else {
      const restOfItemsInCart = this.state.cartItems.filter(
        (item) => item.id !== cartItem.id );
        
      // console.log('RESTOFITEMSCART LENGTH', restOfItemsInCart.length);
      newCart = restOfItemsInCart.length === 0 ? [] : [...restOfItemsInCart];
      
      const newAttributes = cartItem.selectedAttributes
      .map((attribute) => {
        return { attID: attribute.attributeID, attItem: attribute.items.id };
        })
        .sort((a, b) => a.attId - b.attItem);


      let attributesCheck = []

      sameItemsInCart.forEach((sameItemInCart) => {
        const attributesInCart = sameItemInCart.selectedAttributes
          .map((attribute) => {
            return { attID: attribute.attributeID, attItem: attribute.items.id };
          })
          .sort((a, b) => a.attId - b.attItem);

        console.log('ATTRIBUTESIN CART', attributesInCart);
        console.log('NEW ATTRIBUTES', newAttributes);
        const isSameAttributes = compareAttributes(attributesInCart,newAttributes)
        console.log(isSameAttributes);
        attributesCheck.push(isSameAttributes)
        if(isSameAttributes){
          sameItemInCart.qty = cartItem.qty
        }
        newCart.push(sameItemInCart)

      });
      console.log(attributesCheck);
      !attributesCheck.some(check=>check===true) && newCart.push(cartItem)
    }
    console.log(newCart);
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
