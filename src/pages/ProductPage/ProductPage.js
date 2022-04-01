import React from "react";
import { getProductById } from "../../services/helpers/apiRequests";
import { addNavigationTo } from "../../services/helpers/helpers";
// import "./ProductPage.css";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: null };
  }

  async componentDidMount() {
      const id = this.props.params.id;

    const newProduct = await getProductById(id);

    this.setState({ product: newProduct});
  }

  render() {
    const{product} = this.state  
    console.log(this.state);
    return (
        product &&
     <main>
         <h1>{product.name}</h1>
     </main>
      )
  }
}

export default addNavigationTo(ProductPage);
