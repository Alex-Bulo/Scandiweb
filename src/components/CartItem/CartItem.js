import React from "react";
import { AttributeOption, AttributeSelected } from "../Attributes/Attributes.styled";
import Carrousel from "../Carrousel/Carrousel";
import Counter from "../Counter/Counter";
import PriceContainer from "../Price/PriceContainer";
import { CartItemBox, ItemDetails } from "./CartItem.styled";

class CartItem extends React.Component {
  render() {
    const { item, addNewItem, deleteItem, loc } = this.props;
    console.log(item.selectedAttributes)
    return (
      <CartItemBox loc={loc}>

        <ItemDetails loc={loc}>
          <h3>
            {item.brand}
            <br />
            <span>{item.name}</span>
          </h3>

          <PriceContainer
            productsPriceInfo={[{ prices: item.prices, qty: item.qty }]}
          />
          <div className="cart-attributes">
            {item.selectedAttributes.map((attribute, i) => {
              return loc === "overlay" ? (
                <AttributeOption
                  key={i}
                  type={attribute.items.type}
                  value={attribute.items.id}
                >
                  {attribute.items.type !== "swatch" && (
                    <p>{attribute.items.id}</p>
                  )}
                </AttributeOption>
              ) : (
                <AttributeSelected key={attribute.items.id} type={attribute.items.type} value={attribute.items.value}>
                  {attribute.items.type !== "swatch" && <p>{attribute.items.id}</p>}
                </AttributeSelected>
              );
            })}
          </div>
        </ItemDetails>

        <Counter
          item={item}
          action={{ add: addNewItem, delete: deleteItem }}
          loc={loc}
        />

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
