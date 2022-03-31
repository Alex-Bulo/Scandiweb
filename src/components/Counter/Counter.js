import React from "react";
import { Count, CounterBox, CounterBtn } from "./CounterBox.styled";
import addIcn from '../../assets/icons/circle-plus-solid.svg'
import substractIcn from '../../assets/icons/circle-minus-solid.svg'
import deleteIcn from '../../assets/icons/trash-can-solid.svg'
import closeIcn from '../../assets/icons/xmark-solid.svg'

class Counter extends React.Component {

    constructor(props){
        super(props);
        this.substractHandler = this.substractHandler.bind(this)
    }

    substractHandler(){
        const {item, action} = this.props

        if(item.qty === 1){
            console.log(item);
        }else{
            action.add({...item, qty:item.qty-1})
        }
    }



  render() {
      const {loc, action, item} = this.props
    return <CounterBox>

    <CounterBtn loc={loc} onClick={()=>action.add({...item, qty:item.qty + 1})}>
        <img src={addIcn} alt='Button to add one item' style={{}}/>
    </CounterBtn>

    <Count loc={loc}>
        <p>{item.qty}</p>
    </Count>

    <CounterBtn loc={loc} onClick={this.substractHandler}>
        {item.qty === 1 && 
        <img src={deleteIcn} alt='Button to substract one item' style={{}}/>}
        
        {!item.qty === 1 && 
        <img src={substractIcn} alt='Button to substract one item' style={{}}/>}
    </CounterBtn>

    </CounterBox>;
  }
}

export default Counter;
