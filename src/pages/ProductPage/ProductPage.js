import React from "react";
import { addNavigationTo, getProductsByCategory } from "../../services/helpers/helpers";
// import "./ProductPage.css";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: null };
  }

//   async componentDidMount() {
//       const id = this.props.params.id;
//       console.log(id);

//     const newProduct = await getProductsByCategory(id);

//     this.setState({ products: newProduct});
//     // this.setState({ products: {name:'hola'}});
//   }

  render() {
    // const{product} = this.state  
    // console.log(this.state.product);
    return (
     <main>
         <h1>{'hola'}</h1>
     </main>
      )
  }
}

export default addNavigationTo(ProductPage);
