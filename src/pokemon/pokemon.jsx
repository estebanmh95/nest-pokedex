import { useState } from 'react';

export default Counter = () => {
  const [counter, setCounter] = useState(42);

  return (
    <>
      <div>
        <h2 className="counter">{counter}</h2>
        <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
          Click
        </button>
      </div>
      <style>{`
        .counter-button {
            font-size: 1rem;
            padding: 5px 10px;
            color:  #585858;
        }
    `}</style>
    </>
  );
};