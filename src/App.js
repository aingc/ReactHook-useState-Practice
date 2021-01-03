import { useState } from 'react';

function App() {
  //cannot put hooks in conditional, in functions, or loops
  //[CURRENT_STATE, FUNCTION_TO_UPDATE_CURRENT_STATE]
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState('blue');

  //const [count, setCount] = useState(() => foo) will only get called one time vs
  //const [count, setCount] = useState(foo()) will get called everytime the state changes

  const decrementCount = () => {
    setCount(prevCount => prevCount - 1);
    //if done with just count - 1, if you run it twice, it will keep using original value for count and it won't update more than once
    //so if you call with count - 1 twice, it will be 4 - 1 for both calls
  }

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
    setTheme('red');
  }
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
