import React from "react";
import PropTypes from 'prop-types'; 

import "./Attributes.css";
import { AttributeOption, AttributeSelected } from "./Attributes.styled";

export class Attributes extends React.Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(e,attribute) {
    e.stopPropagation()
    if(!this.props.selectHandler){
      return
    }

      //adds the new attribute if no Attributes are selected
      if(this.props.selectedAttributes.length===0){
        
          this.props.selectHandler([attribute]);
          return
      } 

    //checks the user choice's category so that no two attributes are chosen for the same category
    const hasAttribute =  this.props.selectedAttributes.filter(
        (selectedAttribute) =>
          selectedAttribute.attributeID === attribute.attributeID
      ).length > 0;

    let newSelectedAttributes;
    
    //Adds the choice if no attribute for that category has been chosen
    //if so, replaces the choice with the user's new one
    if (!hasAttribute) {
      newSelectedAttributes = [...this.props.selectedAttributes, attribute]

    } else {
      newSelectedAttributes = this.props.selectedAttributes.map(
        (selectedAttribute) => {
          if (selectedAttribute.attributeID === attribute.attributeID) {
            return attribute;
          }
          return selectedAttribute;
        }
      );
    }

    this.props.selectHandler(newSelectedAttributes);
  }


  render() {
    const { id, name, type, items } = this.props.attribute;
    const { selectedAttributes } = this.props;

    return (
      <>
        <h4 className="attributes-title">{name}:</h4>
        <section className="attributes-container">
          {items.map((item) => {
            const isSelected =
              selectedAttributes.filter(
                (selectedAttribute) =>
                  selectedAttribute.attributeID === id &&
                  selectedAttribute.items.id === item.id
              ).length > 0;
                
            if (isSelected) {
              return (
                <AttributeSelected
                  key={item.id}
                  type={type}
                  value={item.value}
                  onClick={(e) => e.stopPropagation()}
                >
                  {type !== "swatch" && <p>{item.displayValue}</p>}
                </AttributeSelected>
              );
            } else {
              return (
                <AttributeOption
                  key={item.id}
                  type={type}
                  value={item.value}
                  onClick={(e) =>
                    this.onSelect(e,{
                      attributeID: id,
                      items: { id: item.id, type:type, value:item.value },
                    })
                  }
                >
                  {type !== "swatch" && <p>{item.displayValue}</p>}
                </AttributeOption>
              );
            }
          })}
        </section>
      </>
    );
  }
}


Attributes.propTypes ={
  attribute: PropTypes.object.isRequired,
  selectedAttributes: PropTypes.array,
  selectHandler: PropTypes.func,
}