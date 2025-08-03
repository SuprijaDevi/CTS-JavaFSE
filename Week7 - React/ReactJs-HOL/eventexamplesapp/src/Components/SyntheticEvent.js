import React from 'react';

const SyntheticEvent = () => {
  const handleClick = (event) => {
    alert("I was clicked");
    console.log("Synthetic Event:", event);
  };

  return (
    <button onClick={handleClick}>OnPress</button>
  );
};

export default SyntheticEvent;
