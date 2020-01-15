import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/BadgesList.css";
import Gravatar from "./Gravatar";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>badges couldn't be found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <li key={badge.id} className="BadgesList">
              <div className="BadgesListItem">
                <Gravatar
                  className="BadgesListItem__avatar"
                  email={badge.email}
                />
                <div>
                  <h1>
                    {badge.firstName} {badge.lastName}
                  </h1>
                  <div className="BadgesListItem__twitter">
                    <FontAwesomeIcon icon={["fab", "twitter"]} />
                    <span>@{badge.twitter}</span>
                  </div>
                  <p>
                    <strong>{badge.jobTitle}</strong>
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
