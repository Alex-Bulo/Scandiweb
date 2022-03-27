import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./layouts/Header/Header";
import CategoryPage from "./pages/CategoryPage/CategoryPage";

class App extends React.Component {

  render() {
    
    return (
      <div className="App">
        <Header/>        
        
        <Routes>

          <Route exact path='/' element={<Navigate to='plp'/>}/> 

          <Route path="plp" element={<CategoryPage/>} />
          <Route path="plp/:id" element={<CategoryPage/>} />
        

        </Routes>
      </div>
    );
  }
}

export default App;
