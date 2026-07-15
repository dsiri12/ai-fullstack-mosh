import { useEffect, useState } from 'react'
import './App.css'
import { Button } from './components/ui/button';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/v1/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h1 className="font-bold p-4 text-3xl">{message}</h1>
      <Button>Click me</Button>
    </div>
  )
}

export default App
