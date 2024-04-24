import React, { useState } from 'react';

//useState - Function (create custom hook we startwith hook)
// component name must be uppercase
// must be in the functional.body component
// cannot call functionally like
// if(){
//   useState()
// }
// else{
//   useEffect()
// }

const UseStateBasics = () => {
  // console.log(useState('hello World!'));//return 1.value 2.handler
  // const value = useState('hello world!')[0];
  // const handler = useState('hello world!')[1];
  // console.log(value, handler);
  // return <h2>useState basic example</h2>;.
  const [lescbians, setlescbians] = useState('Royal Challlengers Bhennn ke Loddeeeee');
  const handleClick = () => {
    setlescbians('E salaa Cup Lollipoop');
    lescbians === 'Royal Challlengers Bhennn ke Loddeeeee' ?
      setlescbians('E salaa Cup Lollipoop')
      : setlescbians('Royal Challlengers Bhennn ke Loddeeeee')
  }
  return (
    <>
      <h2>{lescbians}</h2>
      <button className="btn" type='button' onClick={handleClick}>
        RCBIANS ❌ LESBIANS ☑️
      </button>
    </>
  );
};

export default UseStateBasics;
