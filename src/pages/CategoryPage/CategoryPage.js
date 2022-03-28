import React from "react";
import { addNavigationTo, getProductsByCategory } from "../../services/helpers/helpers";

class CategoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: null, category: null };
  }

  async componentDidMount() {
    const id = this.props.params.id || "all";

    const newProducts = await getProductsByCategory(id);

    this.setState({ products: newProducts, category: id });
    console.log(this.state);
  }

  async componentDidUpdate() {
    const id = this.props.params.id || "all";
    if (this.state.category !== id) {
      const newProducts = await getProductsByCategory(id);

      this.setState({ products: newProducts });
      console.log(this.state);
    }
  }

  render() {
    return <div className="CategoryPage">Si</div>;
  }
}

export default addNavigationTo(CategoryPage);
