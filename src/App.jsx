import { useState } from 'react';
import './App.css';
function App() {
  const [count, setCount] = useState("")
  return(
  <>
  <h1>{count}</h1>
  <button onClick={() => setCount(count+1)}>Increment</button>
  <button onClick={() => setCount(count/12)}>div by 12</button>
  </>
  )
}


export default App;
