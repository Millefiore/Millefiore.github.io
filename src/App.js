import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addNumber = this.addNumber.bind(this);
    this.clear = this.clear.bind(this);
    this.removeLast = this.removeLast.bind(this);
    this.downloadTxtFile = this.downloadTxtFile.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    try {
      this.setState({ result: eval(this.state.value) });
    } catch {
      this.setState({ result: "Invalid input" });
    }
  }

  addNumber(a) {
    this.setState({ value: this.state.value + "" + a });
  }

  clear() {
    this.setState({ value: "" });
  }
  removeLast() {
    this.setState({
      value: this.state.value.substring(0, this.state.value.length - 1),
    });
  }

  downloadTxtFile() {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById('result').innerHTML],    
                {type: 'text/plain;charset=utf-8'});
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={this.handleSubmit}>
            <input
              id="input"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              readOnly={true}
            />
            <input type="submit" value="Calculate" />
          </form>
          <div>
            <button onClick={() => this.clear()}>AC</button>
            <button onClick={() => this.removeLast()}>&lt;</button>
            <button onClick={() => this.addNumber("/")}>/</button>
          </div>
          <div>
            <button onClick={() => this.addNumber(1)}>1</button>
            <button onClick={() => this.addNumber(2)}>2</button>
            <button onClick={() => this.addNumber(3)}>3</button>
            <button onClick={() => this.addNumber("*")}>*</button>
          </div>
          <div>
            <button onClick={() => this.addNumber(4)}>4</button>
            <button onClick={() => this.addNumber(5)}>5</button>
            <button onClick={() => this.addNumber(6)}>6</button>
            <button onClick={() => this.addNumber("-")}>-</button>
          </div>
          <div>
            <button onClick={() => this.addNumber(7)}>7</button>
            <button onClick={() => this.addNumber(8)}>8</button>
            <button onClick={() => this.addNumber(9)}>9</button>
            <button onClick={() => this.addNumber("+")}>+</button>
          </div>
          <div>
            <button onClick={() => this.addNumber("(")}>(</button>
            <button onClick={() => this.addNumber(0)}>0</button>
            <button onClick={() => this.addNumber(")")}>)</button>
            <button onClick={this.handleSubmit}>=</button>
          </div>
          <button onClick={this.downloadTxtFile}>Export results</button>
          <label id="result">{this.state.result}</label>
        </header>
      </div>
    );
  }
}

export default App;
