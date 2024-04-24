import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [rcbians, setRcbians] = useState(data);
  const removeItem = (id) => {
    // const afterFilter = rcbians.filter((rcb) => rcb.id !== id);
    // setRcbians(afterFilter);
    setRcbians((prevState)=>{
      let afterFilter = prevState.filter((rcbId)=> rcbId.id !== id);
      return afterFilter;
    })
  }
  return (
    <>
      <h2>useState array example</h2>
      {
        rcbians.map((rcb) => {
          const { id, name } = rcb;
          return (
            <>
              <div className="item" key={id}>
                <h4>{name}</h4>
                <button className="btn" type='button' onClick={() => removeItem(id)}>
                  RCBIANS
                </button>
              </div>
            </>
          )
        })
      }
      {/* why we use insted onClick={()=>setRcbians([])} of this onClick={setRcbians([])},Because we trigger the function not on render the screen */}
      <button className="btn" type='button' onClick={() => setRcbians([])}>
        Clear RCBIANS ❌ LESBIANS ☑️
      </button>
    </>
  );
};

export default UseStateArray;
