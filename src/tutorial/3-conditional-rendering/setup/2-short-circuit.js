import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('') // empty string === falsy codn.
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';
  return (
    <>
      {/* {if(true){console.log("Hello")}} */}
      {/* this false in react js so we short-circuit evalution. */}
      <h1>short circuit</h1>
      <h2>{firstValue}</h2>
      <h2>{secondValue}</h2>
      {/* this 2nd Statement will not show because text is falsy condn */}
      <h2>{text || 'Vishal Yadav'}</h2>
      {text && <h2>Yadav</h2>}
      {!text && <h2>Yadav</h2>}
    </>
  );
};

export default ShortCircuit;
