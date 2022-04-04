import React from "react";

import "./ErrorPage.css";

class ErrorPage extends React.Component {
  render() {
    return (
      <main className="ErrorPage">
        Ups.. Something went wrong.
        <br /> Please, check if the backend is running and try again!
      </main>
    );
  }
}

export default ErrorPage;
