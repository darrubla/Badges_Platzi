import React from "react";

import nfound from "../images/404s_chaos.jpg";
import "./styles/NotFound.css";

function handleOnClick() {}

function NotFound() {
  return (
    <a href="/">
      <img
        className="bg__image"
        src={nfound}
        alt="Not Found"
        onClick={handleOnClick}
      />
      ;
    </a>
  );
  // <h1 className="bg__image">404: Not Found</h1>;
}

export default NotFound;
