import React from "react";
import { AttributeOption, AttributeSelected } from "./Attributes.styled";
import './Attributes.css'

class Attributes extends React.Component {

  render() {
      const {id, name, type, items} = this.props.attribute
      const {selectedAttributes} = this.props
    
    return (
      <>
        <h3 className="attributes-title">{name}</h3>
        <section className="attributes-container">
            {items.map(item=>{
                if(selectedAttributes.includes(item.id)){
                    return <AttributeSelected key={item.id} type={type} value={item.value} onClick={()=>alert('clicked Selected')}><p>{item.displayValue}</p></AttributeSelected>
                }else{
                    return <AttributeOption key={item.id} type={type} value={item.value} onClick={()=>alert('clicked Selected')}><p>{item.displayValue}</p></AttributeOption>
                }
            })}
        </section>  
      </>
    );
  }
}

export default Attributes;
