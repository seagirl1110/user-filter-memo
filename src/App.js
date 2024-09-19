import './App.css';
import React, { useState } from 'react';
import UserList from './components/userList';

function App() {
  const users = [
    { id: 1, name: 'Mishel' },
    { id: 2, name: 'Max' },
    { id: 3, name: 'Alice' },
    { id: 4, name: 'Bred' },
    { id: 5, name: 'Tom' },
    { id: 6, name: 'Natalie' },
    { id: 7, name: 'Alex' },
    { id: 8, name: 'Ben' },
    { id: 9, name: 'Cameron' },
    { id: 10, name: 'Suzi' },
  ];

  const [filterValue, setFilterValue] = useState('');

  const filterUser = (value) =>
    users.filter((user) =>
      user.name.toLowerCase().includes(value.toLowerCase())
    );

  return (
    <div className="App">
      <input
        value={filterValue}
        onChange={(evt) => setFilterValue(evt.target.value)}
      />
      <UserList users={filterUser(filterValue)} />
    </div>
  );
}

export default App;
