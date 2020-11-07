import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState();
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const hours = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
      setCount(hours);
    }, 1000);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <h1>Hola Sandy próximamente tendré una página web </h1>
        <h3>{`La hora es ${count ?? 'Esperando'}`}</h3>
      </header>
    </div>
  );
}

export default App;
