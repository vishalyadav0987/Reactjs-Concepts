import React from 'react';

const ErrorExample = () => {
  let title = "Random Title";
  const handleClick = ()=>{
    console.log(title); // simply print in console
    title = "Random Title 2";
    console.log(title); // it only change in console not on the browser
    
  }

  return (
    <>
      <div className="container">
        <h2>UseState Error Example</h2>
        <h2>{title}</h2>
        <button className="btn" type='button' onClick={handleClick}>
          change title
        </button>
      </div>
    </>
  );
};

export default ErrorExample;
