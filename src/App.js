import { useEffect, useState } from "react";
import axios from "axios";
// 外部套件

import logo from './assets/logo.svg';
import './assets/App.css';
import Input from './components/Input';
import './assets/all.scss'

// axios

function App() {
  const [text, setText] = useState('');
  const onChangeHandler = (e) => {
    setText(e.target.value);
  }
  // 環境當已引入單一資源，CRA 環境會直接幫你引入
  useEffect(() => {
    (async() => {
      const result = await axios.get('https://randomuser.me/api/');
      console.log(result);
    })();
  }, [])  

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
        <button type="button" className="btn btn-primary">Primary</button>
        { text }
        <Input id="sampleText" text="這是input" 
          value={text} onChangeHandler={onChangeHandler}></Input>
      </header>
    </div>
  );
}

export default App;
