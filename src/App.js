import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./layouts/Header/Header";
import CartPage from "./pages/CartPage/CartPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ProductPage from "./pages/ProductPage/ProductPage";

class App extends React.Component {

  render() {
    
    return (
      <div className="App">
        <Header/>        
        
        <Routes>

          <Route exact path='/' element={<Navigate to='plp/all'/>}/> 

          <Route path="plp" element={<Navigate to='plp/all'/>} />
          <Route path="plp/:id" element={<CategoryPage />} />

          <Route path="pdp/:id" render={<ProductPage />} />
        
          <Route path="cart" element={<CartPage />} />

        </Routes>
      </div>
    );
  }
}

export default App;
