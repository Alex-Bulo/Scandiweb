import React from "react";
import { CTA, CTASecondary } from "../../components/styledComponents";
import { addNavigationTo } from "../../services/helpers/helpers";
import "./CartOverlay.css";
import { CartOverlayBox } from "./CartOverlay.styled";

class CartOverlay extends React.Component {
    

    render() {
    return <CartOverlayBox onClick={(e)=>e.stopPropagation()}>
        
        <div className="cart-overlay-title">
            <h2>My Bag, <span>2 items</span> </h2>
        </div>
        <section>CART ITEMS</section>
        <section>CART ITEMS</section>

        <section className="total-container">
            <h3>Total</h3>
            <div>PRICE</div>
        </section>
        
        <div className="overlay-ctas">

            <CTASecondary  width={'50%'}onClick={()=>this.props.navigate('/cart')}>VIEW BAG</CTASecondary>
            <CTA width={'50%'} onClick={()=>alert('code checkout msg with prices calculated')}>CHECKOUT</CTA>

        </div>
    </CartOverlayBox>;
  }
}

export default addNavigationTo(CartOverlay);
