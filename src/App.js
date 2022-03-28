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

          <Route exact path='/' element={<Navigate to='plp/all'/>}/> 

          <Route path="plp" element={<Navigate to='plp/all'/>} />
          <Route path="plp/:id" element={<CategoryPage />} />
          {/* <Route path="plp/:id" render={(props)=><CategoryPage {...props}/>} /> */}
        

        </Routes>
      </div>
    );
  }
}

export default App;
