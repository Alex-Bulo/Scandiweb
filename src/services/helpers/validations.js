import { compareAttributes } from "../index";

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