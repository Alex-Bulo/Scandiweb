
import { useNavigate, useParams } from "react-router-dom";

// v6 React Route components don't provide location or match props anymore
// creating just one functional component to inject url information as props
export const addNavigationTo = (Component) => {
  return (props) => (
    <Component {...props} params={useParams()} navigate={useNavigate()} />
  );
};

export const calculatePrice = (productInfo, currency) => {

  const totalAmount = productInfo.reduce((total,product) => {
 
    const priceToUse = product.prices.filter(
      (price) => price.currency.symbol === currency
    )[0]
      
    const calculatedPrice = (product.qty * Number(priceToUse.amount));
    
    return calculatedPrice + total
  },0)

  return `${currency} ${totalAmount.toLocaleString()}`;
};

export const validateNewCartItem = (product, qty, selectedAttributes) => {
  if (!qty || !product.inStock) {
    return "This product is out of stock";
  }

  const newCartItem = {
    ...product,
    qty,
    selectedAttributes,
  };
  
  if(product.attributes.length === 0 && selectedAttributes.length === 0){
    return newCartItem
  }

  const attributesCategories = newCartItem.attributes
  .map((attribute) => attribute.id)
  .sort((a, b) => a - b);
  const newAttributes = newCartItem.selectedAttributes
  .map((attribute) => attribute.attributeID)
  .sort((a, b) => a - b);
  
  if (attributesCategories.length !== newAttributes.length) {
    return "Please select an option";
    
  } else {

    const isSameArray = compareAttributes(attributesCategories,newAttributes) 
    if(!isSameArray){
      return "Please select an option"
    }

  }

  return newCartItem;
};

export const compareAttributes = (arrayA,arrayB)=>{
  
  for (let i = 0; i < arrayA.length; i++) {
    
    if ( arrayA[i].attID === arrayB[i].attID && arrayA[i].attItem === arrayB[i].attItem) {
      return true;
    }
  
  }
  return false

}
