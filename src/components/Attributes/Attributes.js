import React from "react";
import { AttributeOption, AttributeSelected } from "./Attributes.styled";
import "./Attributes.css";

class Attributes extends React.Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(attribute) {
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
        <h3 className="attributes-title">{name}</h3>
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
                  onClick={() => alert("clicked Selected")}
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
                  onClick={() =>
                    this.onSelect({
                      attributeID: id,
                      items: { id: item.id },
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

export default Attributes;
