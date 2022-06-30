import React, { useState } from 'react';

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
    const [userList, setUserList] = useState([])

    const addUserHandler = (username, userage) => {
        setUserList(prevUserList => {
            return [...prevUserList, { name: username, age: userage, id: Math.random().toString() }]
        })
    }
  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
        <UserList user={userList} />
    </React.Fragment>
  );
}

export default App;
