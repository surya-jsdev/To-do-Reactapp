import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");

  const handleClick = () => {
    if (input === "") {
      setError("Enter task First")
      return;
    }
    setResult([...result, input]);
    setInput("");
  }

  return (
    <>
      <div className="container">
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" name="text" id="" placeholder='Enter Task...' autoComplete='off' />
        {error && <p>{error}</p>}
        <button onClick={handleClick}>Add</button>
        <div>
          <ul>
            {result.map((todo, index) => <li key={index}>{todo}</li>)}
         
          </ul>
        </div>
      </div>

    </>
  )
}

export default App
