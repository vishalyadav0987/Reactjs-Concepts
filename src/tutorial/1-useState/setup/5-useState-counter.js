import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const complexIncrease = () =>{
    setTimeout(()=>{
      // setValue(value + 1);
      setValue((prevState)=>{
        return prevState + 1 // 1 , 1 + 1 , 2 + 1, 3 + 1, 4+1, 5+1....
      })
    },500)
  }
  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>useState counter example</h2>
        <h1>{value}</h1>
        <button className="btn" type='button' onClick={() => setValue(value === 0 ? 0 : value - 1)}>
          RCB 🏆--
        </button>
        <button className="btn" type='button' onClick={() => setValue(0)}>
          RESET
        </button>
        <button className="btn" type='button' onClick={() => setValue(value + 1)}>
          MSD 🏆++
        </button>
      </section>
      <section style={{ margin: '4rem 0' }}>
      <h2>useState complex counter example</h2>
      <h1>{value}</h1>
      <button className="btn" type='button' onClick={complexIncrease}>
          Increase Later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
