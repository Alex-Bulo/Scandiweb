import React from "react";

class NavBar extends React.Component {
    

// render styledComponent li, links from props (categories)


  render() {
    console.log(this.props.categories);
    return (
      <nav className="NavBar">
        <ul>
        Links
        </ul>
      </nav>
    );
  }
}

export default NavBar;
