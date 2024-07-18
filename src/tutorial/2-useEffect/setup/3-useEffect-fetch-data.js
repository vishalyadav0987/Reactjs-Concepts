import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const fetchUser = async () => {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    setUsers(data);
  }
  useEffect(() => {
    fetchUser();
    // }) // if i not add the dependency list so it will stuck in infinite loop
  }, [])
  return (
    <>
      <h2>fetch data</h2>
      <h2>Github Users</h2>
      <ul className='users'>
        {
          users.map((user,index)=>{
            const {avatar_url,login,html_url} = user;
            return(
              <li key={index}>
                <img src={avatar_url} alt="" />
                <div>
                  <h4>{login}</h4>
                  <a href={html_url}>User Profile</a>
                </div>
              </li>
            )
          })
        }
      </ul>
    </>
  );
};

export default UseEffectFetchData;
