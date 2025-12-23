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
  const handleDelete = (id) => {
    const updatetodo = result.filter((item) => item.id !== id);
    setResult(updatetodo);
  }
  return (
    <>
      <div className="container">
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" name="text" id="" placeholder='Enter Task...' autoComplete='off' />
        {error && <p>{error}</p>}
        <button onClick={handleClick}>Add</button>

        <div>
          <ul>
            {result.map((todo, index) => <li key={index}>{todo}< button className='btn' onClick={() => handleDelete()}>❌</button></li>) }
        </ul>
      </div>
    </div >

    </>
  )
}

export default App
