import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

function User(props) {
  const {
    user: { name, username },
  } = props;
  return (
    <li className="user">
      <span className="user__name">{name}</span>
      <span className="user__username">@{username}</span>
    </li>
  );
}

User.propTypes = {
  user: PropTypes.object,
};

export default User;
