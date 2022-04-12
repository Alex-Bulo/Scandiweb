import { client, Query, Field } from "@tilework/opus";

export const getProductsByCategory = async (id) => {
  try {
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

  } catch (error) {

    console.log(error);
    return "error";
  }
};

export const getProductById = async (id) => {
  try {
    client.setEndpoint("http://localhost:4000");

    const myQuery = new Query("product", true)
      .addArgument("id", "String!", id)
      .addFieldList(["id", "name", "inStock", "gallery", "description", "brand"])
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
      );

    const { product } = await client.post(myQuery);

    return product;

  } catch (error) {
    
    console.log(error);
    return "error";
  }
};
