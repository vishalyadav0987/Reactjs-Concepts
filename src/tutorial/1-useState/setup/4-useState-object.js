import React, { useState } from 'react';

const UseStateObject = () => {
  const [legend, setLegend] = useState({
    name: 'M.S Dhoni',
    nickname: 'Thala',
    reason: 'Thala for a reason',
    number: 7,
    message: 'Kahi bhi rcbians halak me dal de',
  });
  // console.log(legend);
  const { name, nickname, reason, number, message } = legend;
  const changeMessage = () =>{
    // setLegend({message:"Royal challenger Bhenn ke loddeee"});
    setLegend({...legend ,message:"Royal challenger Bhenn ke loddeee"});
  }
  return (
    <>
      <h2>useState object example</h2>
      <h3>{name}</h3>
      <h3>{nickname}</h3>
      <h3>{reason}</h3>
      <h3>{number}</h3>
      <h3>{message}</h3>
      <button className="btn" type='button' onClick={changeMessage}>
        MSD SPEAK
      </button>
    </>
  );
};

export default UseStateObject;
