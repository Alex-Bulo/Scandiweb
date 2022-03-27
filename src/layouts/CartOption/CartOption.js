import React from "react";
import CartContext from "../../services/context/cartContext";

class CartOption extends React.Component {
  static contextType = CartContext;
// grab context Cart, show cartTotal
// render PopUp


  render() {
    
    return (
      <div className="CartOption">
          <p onClick={()=>this.context.addNewCartItem( {id:3,qty:2}) } >add 3</p>
          <p onClick={()=>this.context.addNewCartItem( {id:1,qty:1}) } >add 1</p>

          <p onClick={()=>this.context.deleteCartItem(1)}>delete</p>
          
          <p onClick={()=>console.log(this.context)}>orint</p>
      </div>
    );
  }
}

export default CartOption;

