import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/BadgesList.css";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <li key={badge.id} className="BadgesList">
              <div className="BadgesListItem">
                <img
                  className="BadgesListItem__avatar"
                  src={badge.avatarUrl}
                  alt="Avatar"
                />
                <div>
                  <h2>
                    {badge.firstName} {badge.lastName}
                  </h2>
                  <div className="BadgesListItem__twitter">
                    <FontAwesomeIcon icon={["fab", "twitter"]} />
                    <span>@{badge.twitter}</span>
                  </div>
                  <p>{badge.jobTitle}</p>
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
