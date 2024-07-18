import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <h2>show/hide</h2>
      <button className='btn'
        onClick={() => setShow(!show)}
      >Show/Hide
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => {
      setSize(window.innerWidth);
    });
    return () => {
      window.removeEventListener('resize', () => {
        setSize(window.innerWidth);
      }) // it help remove side eefect held in site  SIDE Effect : when we toggle component again an again.
    }
  }, []);
  return (
    <>
      <h2 style={{ marginTop: "2rem" }}>Window</h2>
      <h2>Size: {size} Px</h2>
    </>
  )
}

export default ShowHide;
