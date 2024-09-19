import './App.css';
import React, { useCallback, useMemo, useState } from 'react';
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
  const [count, setCount] = useState(0);

  const filterUser = useCallback((value) => {
    console.log('filter user');
    return users.filter((user) =>
      user.name.toLowerCase().includes(value.toLowerCase())
    );
  }, []);

  const filteredUsers = useMemo(() => {
    console.log('filtered users');
    return filterUser(filterValue);
  }, [filterValue, filterUser]);

  console.log('render App - Count для проверки memoization userList');

  return (
    <div className="App">
      <div className="count_container">
        <span>Count: {count}</span>
        <button onClick={() => setCount(count + 1)}>plus count</button>
      </div>
      <input
        value={filterValue}
        onChange={(evt) => setFilterValue(evt.target.value)}
      />
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;
