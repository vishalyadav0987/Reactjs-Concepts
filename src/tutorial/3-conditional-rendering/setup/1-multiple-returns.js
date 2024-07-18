import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [user, setUser] = useState('Default User');
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(url).then((res) => {
      if (res.status >= 200 && res.status <= 299) {
        return res.json();
      }
      else {
        setLoading(false);
        setIsError(true);
        throw new Error(res.statusText);
      }
    }).then((user) => {
      const { login } = user;
      setUser(login);
      setLoading(false);
      setIsError(false);
    }).catch((err) => { console.log(err) })
  }, [])
  if (loading) {
    return (
      <>
        <h2>multiple returns</h2>
        <div>
          <h1>Loading...</h1>
        </div>
      </>
    )
  }
  if (isError) {
    return (
      <>
        <h2>multiple returns</h2>
        <div>
          <h1>Error...</h1>
        </div>
      </>
    )
  }
  return (
    <>
      <h2>multiple returns</h2>
      <div>
        <h1>{user}</h1>
      </div>
    </>
  )



};

export default MultipleReturns;
