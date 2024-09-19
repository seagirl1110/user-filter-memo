import './App.css';
import React from 'react';
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

  return (
    <div className="App">
      <UserList users={users} />
    </div>
  );
}

export default App;
