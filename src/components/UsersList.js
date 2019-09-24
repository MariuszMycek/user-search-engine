import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

function UsersList(props) {
  const { users } = props;
  return (
    <ol>
      {users.map(user => (
        <User key={user.id} user={user} />
      ))}
    </ol>
  );
}

UsersList.propTypes = {
  users: PropTypes.array,
};

export default UsersList;
