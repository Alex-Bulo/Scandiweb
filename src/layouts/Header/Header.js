import { client, Query } from "@tilework/opus";
import React from "react";
import CartSnippet from "../CartSnippet/CartSnippet";
import CurrencySelector from "../CurrencySelector/CurrencySelector";
import NavBar from "../NavBar/NavBar";
import './Header.css'
import logo from '../../assets/images/a-logo.png'
import { Link } from "react-router-dom";

class Header extends React.Component {
    
    constructor(){
        super()
        this.state = {menuCategories:null}
    }
  
    async componentDidMount(){
    client.setEndpoint('http://localhost:4000')
           
    const getCategories = new Query('categories', true)
        .addFieldList(['name'])
    
    const {categories} = await client.post(getCategories)

    this.setState({menuCategories:categories}) 

    }


  // render CurrencySelector
  // render CartSnippet

  render() {
    return (
      <header className="Header">
        {this.state.menuCategories && <NavBar categories={this.state.menuCategories} />}
        <Link to='/plp/all'><img src={logo} alt='Logo for coding challange for Scandiweb'/></Link>
        <CurrencySelector />
        <CartSnippet />
        
      </header>
    );
  }
}

export default Header;
