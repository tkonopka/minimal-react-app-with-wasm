import {useState, useEffect} from "react";
import './App.css';
import utils_wasm from './wasm/utils.js';

// container for wasm functions - will be populated at run-time
const wasm_functions = {}

function App() {
  const [number, setNumber] = useState(4)
  const [result, setResult] = useState(null)
  const [name, setName] = useState("Alex")
  const [greeting, setGreeting] = useState(null)

  // load the wasm module and extract the executable functions
  useEffect(() => {
    utils_wasm().then(response => {
      wasm_functions["square"] = response["square"]
      wasm_functions["greet"] = response["greet"]
    })
  }, [])

  // handlers for user interactions
  const handleNumberClick = () => {
    const f = wasm_functions["square"]
    if (f === undefined) {
      setResult("please wait")
    } else {
      setResult(f(parseFloat(number)))
    }
  }
  const handleStringClick = () => {
    const f = wasm_functions["greet"]
    if (f === undefined) {
      setGreeting("please wait...")
    } else {
      setGreeting(f(name, "Hello"))
    }
  }

  return (
    <div className="App">
      <div className="content">
        <h1>App with wasm capability</h1>
        <h2>Numbers</h2>
        <p>
          Enter a number into the textbox, then press the button.
          A wasm function will compute the square of the number.
        </p>
        <div>
          <input value={number} onChange={(e) => setNumber(e.target.value)}/>
          <button onClick={handleNumberClick}>Process number</button>
          <span>Output: </span><span>{result}</span>
        </div>
        <h2>Strings</h2>
        <div>
          <p>
            Enter a string into the textbox, then press the button.
            A wasm function will create a greeting.
          </p>
          <input value={name} onChange={(e) => {setName(e.target.value)}}/>
          <button onClick={handleStringClick}>Process string</button>
          <span>Output: </span><span>{greeting}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
