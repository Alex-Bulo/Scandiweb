
import { useNavigate, useParams } from "react-router-dom";
// v6 React Route components don't provide location or match props anymore
// creating just one functional component to inject url information as props
const addNavigationTo = (Component) => {
  return (props) => (
    <Component {...props} params={useParams()} navigate={useNavigate()} />
  );
};

const calculatePrice = (productInfo, currency) => {

  const totalAmount = productInfo.reduce((total,product) => {
 
    const priceToUse = product.prices.filter(
      (price) => price.currency.symbol === currency
    )[0]
    
    const items = product.qty === 0? 1 : product.qty
    const calculatedPrice = (items * Number(priceToUse.amount));
    
    return calculatedPrice + total
  },0)

  return `${currency} ${totalAmount.toLocaleString()}`;
};

const compareAttributes = (arrayA,arrayB)=>{
  
  for (let i = 0; i < arrayA.length; i++) {
    
    if ( arrayA[i].attID === arrayB[i].attID && arrayA[i].attItem === arrayB[i].attItem) {
      return true;
    }
  
  }
  return false

}

const extractHTMLElements = (stringHTML)=>{
  const originalLength = stringHTML.length
  
  const newElements = []
  let newString = stringHTML
  for(let i=0; i < originalLength;){
    
    const opening = newString.indexOf("<")
    const closure = newString.indexOf(">")
    const blank = newString.indexOf(" ") === -1 ? originalLength : newString.indexOf(" ")
  
    const openingLimit = closure < blank ? closure : blank
    
    const tag = newString.slice(opening+1,closure)
    
    const closingTag = newString.indexOf("</"+tag+">")
    
    const child = newString.slice(openingLimit+1,closingTag);

    let subChild
    if(child.indexOf("<")>0){
       subChild = extractHTMLElements(child.slice(child.indexOf("<"),)) 
      child = child.slice(0,child.indexOf("<"))
    }
    newString = newString.slice(closingTag + 3 + tag.length,)
  
    newElements.push({tag,child,subChild})
    i= i + closingTag + 3 + tag.length;
  }

  return newElements
}

function getHTMLElements(html) {
  var template = document.createElement('div');
  template.innerHTML = html;
  return template;
}

export {addNavigationTo, calculatePrice, compareAttributes, getHTMLElements}

