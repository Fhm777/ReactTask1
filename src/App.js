import { useState } from 'react';
import './App.css';

function App() {
  const [n, setN] = useState(0);

  const handleChange = (event) => {
    let a = event.target.value;
    a.length===0 ? setN(0) : setN(a.split(' ').length);
  }

  return (
    <div className='App'>
      <h1 className='heading'>Responsive Paragraph Word Counter</h1>
      <textarea className='text' onChange={handleChange} name="" id="" cols="36" rows="5"></textarea>
      <p>Word Count: {n}</p>
    </div>
  );
}

export default App;
