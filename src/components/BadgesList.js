import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgesList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Gravatar from "./Gravatar";

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
        />
        <div>
          <h1>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </h1>
          <div className="BadgesListItem__twitter">
            <FontAwesomeIcon icon={["fab", "twitter"]} />
            <span>@{this.props.badge.twitter}</span>
          </div>
          <p>
            <strong>{this.props.badge.jobTitle}</strong>
          </p>
        </div>
      </div>
    );
  }
}

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
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.reverse().map(badge => {
            return (
              <li key={badge.id}>
                <Link
                  className="text-reset text-decoration-none"
                  to={`/badges/${badge.id}`}
                >
                  <BadgesListItem badge={badge} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
