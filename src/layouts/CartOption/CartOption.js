import React from "react";
import CartContext from "../../services/context/cartContext";
import NavOption from "../Header/NavOption";
import cartIcn from "../../assets/icons/empty-cart.svg";
import "./CartOption.css";
import { Background } from "../../services/helpers/PopUpContainer";
import CartOverlay from "../CartOverlay/CartOverlay";

class CartOption extends React.Component {
  static contextType = CartContext;

  constructor() {
    super();
    this.state = { optionPosition: null, popUpDisplay: false };
    this.getOptionPositionHandler = this.getOptionPositionHandler.bind(this);
    this.popUpHandler = this.popUpHandler.bind(this);
  }

  getOptionPositionHandler(position) {
    this.setState({ ...this.state, optionPosition: position });
  }
  popUpHandler() {
    this.setState({ ...this.state, popUpDisplay: !this.state.popUpDisplay });
  }

  render() {
    return (
      <section className="CartOption">
        <NavOption
          getMiddlePosition={this.getOptionPositionHandler}
          clickHandler={this.popUpHandler}
        >
          <div
            className={`cart-icn-container ${
              this.state.popUpDisplay && this.context.cartTotal ===0 && "active-option"
            }`}
          >
            <img src={cartIcn} alt="cart icon" className={`cart-icn`} />

            {this.context.cartTotal > 0 && (
              <p className="cart-total">{this.context.cartTotal}</p>
            )}
          </div>
        </NavOption>

        {this.state.popUpDisplay && (
          <Background
            op={0.2}
            clickHandler={() =>
              this.setState({ ...this.state, popUpDisplay: false })
            }
          >
            <CartOverlay
              clickHandler={() =>
                this.setState({ ...this.state, popUpDisplay: false })
              }
            />
          </Background>
        )}
      </section>
    );
  }
}

export default CartOption;
