import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");

  const handleClick = () => {
    if (input.trim() === "") {
      setError("Enter task First")
      return;
    }
    setResult([...result, input.trim()]);
    setInput("");
    setError("");
  }
  const handleDelete = (index) => {
    const updatetodo = result.filter((_, i) => i !== index);
    setResult(updatetodo);
  }
  return (
    <>
      <div className="container">
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" name="text" id="" placeholder='Enter Task...' autoComplete='off' />
        {error && <p>{error}</p>}
        <button className="addtask" onClick={handleClick}>Add</button>

        <div>
          <ul style={{display:"flex",background:"red",flexDirection:"cloumn",width:"300px"}}>
            {result.map((todo, index) => (
              <li key={index} style={{display:"flex",justifyContent:"space-between",width:"300px"}}>
                {todo}
                <button className='btn' onClick={() => handleDelete(index)}>❌</button>
              </li>
            ))}
          </ul>
        </div>
      </div >

    </>
  )
}
export default App
