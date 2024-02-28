import { useState } from "react";
import logo from './assets/logo.svg';
import './assets/App.css';
import Input from './components/Input';

function App() {
  const [text, setText] = useState('');
  const onChangeHandler = (e) => {
    setText(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor in reprehenderit in voluptate velit esse cillum dolore eu.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        { text }
        <Input id="sampleText" text="這是input" 
          value={text} onChangeHandler={onChangeHandler}></Input>
      </header>
    </div>
  );
}

export default App;
