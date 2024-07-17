import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const resizeHandler = () => {
    setSize(window.innerWidth);
  }
  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', resizeHandler); // this is side effect
    return () => {
      console.log('cleanup') // every render the clenup func will call
      window.removeEventListener('resize', resizeHandler);
    }
    // },[]) // it also us instead of cleanup func 
  }) // but is good practice to do the using cleanup function
  console.log('render');
  return (
    <>
      <h2>useEffect cleanup</h2>
      <h2>Window</h2>
      <h4>{size} PX</h4>
    </>
  );
};

export default UseEffectCleanup;
