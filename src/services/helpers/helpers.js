import { client, Query, Field } from "@tilework/opus";
import { useNavigate, useParams } from "react-router-dom";

// v6 React Route components don't provide location or match props anymore
// creating just one functional component to inject url information as props
export const addNavigationTo = (Component) => {
  return (props) => (
    <Component {...props} params={useParams()} navigate={useNavigate()} />
  );
};

export const getProductsByCategory = async (id) => {
  client.setEndpoint("http://localhost:4000");

  const query = new Query("category", true)
    .addArgument("input", "CategoryInput", { title: id })
    .addField("name")
    .addField(
      new Field("products", true)
        .addFieldList(["id", "name", "inStock", "brand", "gallery"])
        .addField(
          new Field("attributes", true)
            .addFieldList(["id", "name", "type"])
            .addField(
              new Field("items", true).addFieldList([
                "displayValue",
                "value",
                "id",
              ])
            )
        )
        .addField(
          new Field("prices", true)
            .addFieldList(["amount"])
            .addField(
              new Field("currency", true).addFieldList(["label", "symbol"])
            )
        )
    );
  const { category } = await client.post(query);

  return category.products;
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
  if (!qty) {
    return false;
  }

  const newCartItem = {
    ...product,
    qty,
    selectedAttributes,
  };
  const attributesCategories = newCartItem.attributes
    .map((attribute) => attribute.id)
    .sort((a, b) => a - b);
  const newAttributes = newCartItem.selectedAttributes
    .map((attribute) => attribute.attributeID)
    .sort((a, b) => a - b);

  if (attributesCategories.length !== newAttributes.length) {
    return false;
  
  } else {
    const isSameArray = compareAttributes(attributesCategories,newAttributes) 
    if(!isSameArray){
      return false
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
