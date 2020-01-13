import React from "react";

import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div>
          <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
          <h1>
            Daniel <br /> Arrubla
          </h1>
        </div>

        <div>
          <p>Frontend Engineer</p>
          <p>@darrubla</p>
        </div>

        <div>#bihusconf</div>
      </div>
    );
  }
}
export default Badge;
