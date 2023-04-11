import { useState } from 'react';

function Home() {
  const [value, setValue] = useState(false);

  const handleClick = () => {
    setValue((prevState) => prevState + 1);
  };

  return (
    <>
      <h1>Counter Title</h1>
      <h2>{value}</h2>
      <button type="button" onClick={handleClick}>Increment</button>
      <button type="button" onClick={() => setValue((prevState) => prevState - 1)}>Decrement</button>
      <button type="button" onClick={() => setValue(5)}>Reset</button>
    </>
  );
}

export default Home;