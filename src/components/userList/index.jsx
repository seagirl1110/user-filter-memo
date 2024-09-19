import React, { memo } from 'react';
import PropTypes from 'prop-types';

function UserList({ users }) {
  console.log('render users');

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

UserList.propTypes = {
  users: PropTypes.array,
};

export default memo(UserList);
