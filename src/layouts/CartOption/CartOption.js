import React from "react";
import CartContext from "../../services/context/cartContext";
import NavOption from "../Header/Header.styled";

class CartOption extends React.Component {
  static contextType = CartContext;

  constructor() {
    super();
    this.state = { optionPosition: null, popUpDisplay: false };
    this.getOptionPositionHandler = this.getOptionPositionHandler.bind(this)
    this.popUpHandler = this.popUpHandler.bind(this)
  }

  getOptionPositionHandler(position){
    this.setState({...this.state, optionPosition:position})  
  }
  popUpHandler(){
    this.setState({...this.state,popUpDisplay:!this.state.popUpDisplay})
  }

  // grab context Cart, show cartTotal
  // render PopUp

  render() {
    return (
      <div className="CartOption">
        <NavOption getMiddlePosition={this.getOptionPositionHandler} clickHandler={this.popUpHandler}>
          <img
            src={arrowDown}
            alt="cart icon"
            className={`cart-icn`}
          />
        
          {this.context.selectedCurrency.symbol}

        </NavOption>
      </div>
    );
  }
}

export default CartOption;
