import React from "react";
import PriceContainer from "../Price/PriceContainer";
import { CartItemBox, ItemDetails } from "./CartItem.styled";

class CartItem extends React.Component {
  render() {
    const { item, addNewItem, deleteItem, loc } = this.props;
    console.log(this.props);
    return (
      <CartItemBox loc={loc}>
        <section>
        <ItemDetails>
          <h3>
            {item.brand}
            <br />
            <span>{item.name}</span>
          </h3>
        </ItemDetails>

        <PriceContainer productsPriceInfo={[{ prices: item.prices, qty: item.qty }]}/>
        
        </section>
      
      </CartItemBox>
    );
  }
}

export default CartItem;
