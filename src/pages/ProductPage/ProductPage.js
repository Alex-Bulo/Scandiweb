import React from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import { getProductById } from "../../services/helpers/apiRequests";
import { addNavigationTo } from "../../services/helpers/helpers";
import "./ProductPage.css";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: null };
  }

  async componentDidMount() {
    const id = this.props.params.id;

    const newProduct = await getProductById(id);

    this.setState({ product: newProduct, mainImage: 0 });
  }

  render() {
    const { product } = this.state;
    
    return (
      product && (
        <main className="ProductPage">
          <Carrousel
            inStock={product.inStock}
            images={product.gallery}
            name={product.name}
            hasSnippets={true}
          >
            
          </Carrousel>
          
        </main>
      )
    );
  }
}

export default addNavigationTo(ProductPage);
