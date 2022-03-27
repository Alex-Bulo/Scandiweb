import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./NavBar.css";

const MenuCategory = styled.li`
  width: 97px;
  height: 56px;

  display: flex;
  justify-content: flex-start;
  /* align-items:center; */
`;

class NavBar extends React.Component {
  // render styledComponent li, links from props (categories)

  render() {
    console.log(this.props.categories);
    return (
      <nav className="NavBar">
        <ul>
          {this.props.categories.map((category, i) => (
            <MenuCategory>
              <NavLink key={i} to={`plp/${category.name}`} className='link-menu'>
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
