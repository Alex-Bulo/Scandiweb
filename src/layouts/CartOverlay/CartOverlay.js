import React from "react";
import { addNavigationTo } from "../../services/helpers/helpers";
import "./CartOverlay.css";
import { CartOverlayBox } from "./CartOverlay.styled";

class CartOverlay extends React.Component {
    
    
    render() {
    return <CartOverlayBox x={this.state.optionPosition} onClick={(e)=>e.stopPropagation()}>
        
        <div className="cart-overlay-title">
            <h2>My Bag,</h2>
            <p>2 items</p>
        </div>
        <section>CART ITEMS</section>
        <section>CART ITEMS</section>
        <section className="total-container">
            <h3 className="total-label">Total</h3>
            <div>PRICE</div>
        </section>
        <div className="overlay-ctas">
            <button onClick={()=>this.props.navigate('/cart')}>VIEW BAG</button>
            <button onClick={()=>alert('code checkout msg with prices calculated')}>CHECKOUT</button>
        </div>
    </CartOverlayBox>;
  }
}

export default addNavigationTo(CartOverlay);
