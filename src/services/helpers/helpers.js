import { client, Query, Field } from "@tilework/opus";
import { useNavigate, useParams } from "react-router-dom";

export const popUpHandler = (state) => {
  state({ ...this.state, popUpDisplay: !this.state.popUpDisplay });
};

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
        .addFieldList(["name", "inStock", "brand", "gallery"])
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
