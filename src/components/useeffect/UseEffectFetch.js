import React, { useEffect, useState } from 'react';

const url = 'https://api.github.com/users';
const UseEffectFetch = () => {
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    console.log(users);
    setUsers(users);
  };

  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h1>Github Users</h1>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetch;
