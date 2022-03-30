import React from "react";
import { addNavigationTo, getProductsByCategory } from "../../services/helpers/helpers";
import ProductPreview from "../../components/ProductPreview/ProductPreview";
import "./CategoryPage.css";
class CategoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: null, category: null };
  }

  async componentDidMount() {
    const id = this.props.params.id || "all";

    const newProducts = await getProductsByCategory(id);
// console.log(newProducts);
    this.setState({ products: newProducts, category: id });
  }

  async componentDidUpdate() {
    const id = this.props.params.id || "all";
    if (this.state.category !== id) {
      const newProducts = await getProductsByCategory(id);

      this.setState({ products: newProducts, category: id });
    }
  }

  render() {
    return (
      this.state.products && (
        <main className="CategoryPage">

          <h1 className="category-title">{this.state.category}</h1>
          
          <section className="products-container">
            {this.state.products.map((product) => (
              <ProductPreview key={product.id} product={product} />
            ))}
          </section>
        
        </main>
      )
    );
  }
}

export default addNavigationTo(CategoryPage);
