import React from 'react';
import './App.css';
import UserList from './component/user/ListUser';
import AddUser from './component/user/AddUser';

function App() {
  return (
    <div className="App">
      <AddUser></AddUser>
      <UserList></UserList>
    </div>
  );
}

export default App;
