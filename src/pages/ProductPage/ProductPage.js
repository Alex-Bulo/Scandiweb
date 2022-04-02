import React from "react";
import Attributes from "../../components/Attributes/Attributes";
import Carrousel from "../../components/Carrousel/Carrousel";
import { ItemDetails } from "../../components/CartItem/CartItem.styled";
import PriceContainer from "../../components/Price/PriceContainer";
import { CTA } from "../../components/styledComponents";
import { getProductById } from "../../services/helpers/apiRequests";
import { addNavigationTo } from "../../services/helpers/helpers";
import "./ProductPage.css";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: null, selectedAttributes: null, qty: null };
    this.selectAttributeHandler = this.selectAttributeHandler.bind(this);
  }

  async componentDidMount() {
    const id = this.props.params.id;

    const newProduct = await getProductById(id);

    this.setState({ product: newProduct, selectedAttributes: [], qty: 1 });
  }

  selectAttributeHandler(newSelectedAttributes) {
    this.setState({ ...this.state, selectedAttributes: newSelectedAttributes });
  }

  render() {
    const { product, qty, selectedAttributes } = this.state;

    return (
      product && (
        <main className="ProductPage">
          <Carrousel
            inStock={product.inStock}
            images={product.gallery}
            name={product.name}
            hasSnippets={true}
          ></Carrousel>

          <ItemDetails classname="pdp-details" loc="pdp">
            <h3 className="pdp-title">
              {product.brand}
              <br />
              <span>{product.name}</span>
            </h3>

            <div className="container pdp-attributes">
              {product.attributes.map((attribute) => (
                <Attributes
                  key={attribute.id}
                  attribute={attribute}
                  selectedAttributes={selectedAttributes}
                  selectHandler={this.selectAttributeHandler}
                />
              ))}
            </div>

            <div className="container price-container">
              <h4 className="price-title">Price:</h4>
              <PriceContainer
                productsPriceInfo={[{ prices: product.prices, qty: qty }]}
              />
            </div>
            <div className="container cta-container">
              <CTA
                width={"80%"}
                onClick={() => alert("checkout msg with prices calculated")}
              >
                Add to cart
              </CTA>
            </div>

            <section className="container description-container">
              <p
                dangerouslySetInnerHTML={{ __html: `${product.description}` }}
              />
            </section>
          </ItemDetails>
        </main>
      )
    );
  }
}

export default addNavigationTo(ProductPage);
