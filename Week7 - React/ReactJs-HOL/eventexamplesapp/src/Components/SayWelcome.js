import React from 'react';

const SayWelcome = () => {
  const handleClick = (message) => {
    alert(`Message: ${message}`);
  };

  return (
    <button onClick={() => handleClick("Welcome")}>Say Welcome</button>
  );
};

export default SayWelcome;
