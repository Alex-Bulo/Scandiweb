import React from "react";
import PropTypes from 'prop-types'; 

import closeIcn from "../../assets/icons/xmark-solid.svg";

import { CTA } from "../styledComponents";

import "./PurchaseOrder.css";

export class PurchaseOrder extends React.Component {
  render() {
    return (
      <div className="PurchaseOrder" onClick={(e) => e.stopPropagation()}>
        <img
          src={closeIcn}
          alt="Close purchase information"
          className="close-icn"
          onClick={this.props.closeHandler}
        />

        {this.props.order.map((item, i) => {
          return (
            <article key={i} className="order-item">
              <ul>
                <li>
                  <span>{item.name}</span> by {item.brand}
                </li>

                {item.selectedAttributes.map((attribute, i) => {
                  return (
                    <li key={i}>
                      <span>{attribute.attributeID}:</span> {attribute.items.id}
                    </li>
                  );
                })}

                <li>
                  <span>{item.qty}</span> item{item.qty > 1 && "s"}
                </li>

                <li>
                  <span>Price:</span>
                  <select>
                    {item.prices.map((price, i) => {
                      return <option key={i}>{price}</option>;
                    })}
                  </select>
                  <br />
                </li>
              </ul>
            </article>
          );
        })}
        <div className="order-cta">
            <CTA
          width={"50%"}
          onClick={()=>this.props.confirmHandler()}
        >
          Confirm
        </CTA>
            </div>
      </div>
    );
  }
}

PurchaseOrder.propTypes ={
  order: PropTypes.array.isRequired,
  closeHandler: PropTypes.func.isRequired,
  confirmHandler: PropTypes.func.isRequired,
}