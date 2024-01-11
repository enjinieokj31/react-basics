/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a                                      // JSX:- JS XML Syntax(HTML in JS)
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;  */

import './App.css';   //to import css
import Header from './components/Header';
function App(){
     return (
      <>
       <Header />
       <div>hello</div>
      </>
     )
}

export default App;
