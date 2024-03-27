import React, { useState, useEffect } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []); 

  return (
    <div>
      <h1>Contador Progresivo</h1>
      <p>El contador está en: {count}</p>
    </div>
  );
};

export default Counter;