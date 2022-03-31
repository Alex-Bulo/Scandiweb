import React from "react";
import { AttributeOption } from "../Attributes/Attributes.styled";
import Carrousel from "../Carrousel/Carrousel";
import Counter from "../Counter/Counter";
import PriceContainer from "../Price/PriceContainer";
import { CartItemBox, ItemDetails } from "./CartItem.styled";

class CartItem extends React.Component {
  render() {
    const { item, addNewItem, deleteItem, loc } = this.props;
    console.log(this.props);
    return (
      <CartItemBox loc={loc}>
        {/* <section> */}
        <ItemDetails>
          <h3>
            {item.brand}
            <br />
            <span>{item.name}</span>
          </h3>

          <PriceContainer
            productsPriceInfo={[{ prices: item.prices, qty: item.qty }]}
          />
          <div className="cart-attributes">
            {item.selectedAttributes.map((attribute) => {
              return (
                <AttributeOption
                  type={attribute.items.type}
                  value={attribute.items.id}
                >
                {attribute.items.type !== "swatch" && <p>{attribute.items.id}</p>}
                </AttributeOption>
              );
            })}
          </div>
        </ItemDetails>

        {/* </section> */}
        <Counter item={item} action={{add:addNewItem, delete:deleteItem}} loc={loc}/>

        <Carrousel
          inStock={item.inStock}
          images={item.gallery}
          name={item.name}
          current={0}
        />

      </CartItemBox>
    );
  }
}

export default CartItem;
