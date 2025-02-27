import { useState } from 'react'
import './App.css'
function App() {
  const [text, setText] = useState("");

  return (
    <>
      <input type="text" placeholder="Type something"
      value={text}
      onChange={(e)=>setText(e.target.value)}
      />
      <h1><strong>You typed :{text}</strong></h1>
      <h2>Text length:{text.length}</h2>
      </>
  );
}
export default App
