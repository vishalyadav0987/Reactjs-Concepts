import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
// useEffect - work outside the component(fetching data)
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  // if(value > 0){
  //   useEffect(() => {
  //     console.log('Call UseEffect');
  //     document.title = `New Message - (${value})`
  //   });
  // } hook canot call conditionally

  // but
  useEffect(() => {
    console.log('Call UseEffect');
    if (value > 1) {
      document.title = `New Message - (${value})`
    }
  });
  console.log('render component');
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>Change</button>
      {/* if i press the bvutton it will re render component because evey time useEffect will call in every click on button. */}
    </>
  )
};

export default UseEffectBasics;
