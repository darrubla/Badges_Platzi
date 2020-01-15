import React from "react";

import "./styles/PageError.css";

function PageError(props) {
  return <h2 className="PageError">😱😱{props.error.message}😭😭</h2>;
}

export default PageError;
