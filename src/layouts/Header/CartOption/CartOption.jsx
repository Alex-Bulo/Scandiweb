import React from "react";

import OptionContainer from "../OptionContainer";
import CartOverlay from "../CartOverlay/CartOverlay";
import { PopUpContainer } from "../../../components";

import {CartContext} from "../../../services";

import cartIcn from "../../../assets/icons/empty-cart.svg";

import "./CartOption.css";

class CartOption extends React.Component {
  static contextType = CartContext;

  constructor() {
    super();
    this.state = { optionPosition: null, popUpDisplay: false };
    this.getOptionPositionHandler = this.getOptionPositionHandler.bind(this);
    this.popUpHandler = this.popUpHandler.bind(this);
    this.icnBadge = React.createRef();
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
        <OptionContainer
          getMiddlePosition={this.getOptionPositionHandler}
          clickHandler={this.popUpHandler}
        >
          <div
            className={`cart-icn-container ${
              this.state.popUpDisplay &&
              this.context.cartTotal === 0 &&
              "active-option"
            }`}
          >
            <img src={cartIcn} alt="cart icon" className={`cart-icn`} />

            {this.context.cartTotal > 0 && (
              <p ref={this.icnBadge} className="cart-total">
                {this.context.cartTotal}
              </p>
            )}
          </div>
        </OptionContainer>

        {this.state.popUpDisplay && (
          <PopUpContainer
            op='0.2'
            clickHandler={() =>
              this.setState({ ...this.state, popUpDisplay: false })
            }
          >
            <CartOverlay
              clickHandler={() =>
                this.setState({ ...this.state, popUpDisplay: false })
              }
              checkout={this.props.checkout}
            />
          </PopUpContainer>
        )}
      </section>
    );
  }
}

export default CartOption;
