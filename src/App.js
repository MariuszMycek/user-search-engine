import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import UsersList from './components/UsersList';
import SearchInput from './components/SearchInput';
import InfoMessage from './components/InfoMessage';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [usersToDisplay, setUsersToDisplay] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await data.json();

        setUsers(users);
        setUsersToDisplay(users);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  function searchUser(phrase) {
    const foundUsers = users.filter(user =>
      user.name.toLowerCase().includes(phrase.toLowerCase())
    );
    setUsersToDisplay(foundUsers);
  }

  return (
    <div className="container">
      <Header />
      <SearchInput searchUser={searchUser} />
      {usersToDisplay.length > 0 && !isError && !isLoading ? (
        <UsersList users={usersToDisplay} />
      ) : (
        <InfoMessage isError={isError} isLoading={isLoading} />
      )}
    </div>
  );
}

export default App;
