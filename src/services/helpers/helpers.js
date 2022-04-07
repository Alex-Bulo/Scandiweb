
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

export {addNavigationTo, calculatePrice, compareAttributes}