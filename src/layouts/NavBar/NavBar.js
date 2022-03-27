import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./NavBar.css";

const MenuCategory = styled.li`
  width: 97px;
  height: 56px;
  padding-top:5%;

  display: flex;
  justify-content: flex-start;
  cursor: pointer;
`;

class NavBar extends React.Component {

  render() {

    return (
      <nav className="NavBar">
        <ul>
          {this.props.categories.map((category, i) => (
            <MenuCategory key={i}>
              <NavLink to={`plp/${category.name}`} className='link-menu'>
                {category.name.toUpperCase()}
              </NavLink>
            </MenuCategory>
          ))}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
