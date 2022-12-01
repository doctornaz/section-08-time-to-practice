import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
function App() {
  const [usersList, setUsersList]   = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList(prevState=> { return [...prevState, {name: uName, age: uAge, id: Math.random().toString()}]});
  }

  return (
    <>
    {/* <React.Fragment> = <> Fragments does not return any html
    this is also used to write cleaner html code.*/}
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    {/* <Wrapper/> */}
    </>
  );
}

export default App;
