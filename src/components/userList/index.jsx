import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

function UserList({ users }) {
  console.log('render users');

  return (
    <div className={styles.list}>
      {users.map((user) => (
        <div className={styles.list_item} key={user.id}>
          {user.name}
        </div>
      ))}
    </div>
  );
}

UserList.propTypes = {
  users: PropTypes.array,
};

export default memo(UserList);
