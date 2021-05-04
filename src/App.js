import React, { Component } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input"
import { ClearButton } from "./components/ClearButton";
import * as math from "mathjs";

class App extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      input: ""
    }
  }

  createInput = value => {
    this.setState({input: this.state.input + value})
  }

  handleEqual = () => {
    this.setState({input: math.evaluate(this.state.input)})
  }

  render() {
  return (
    <div className="app">
      <div className="calc-wrapper">
        <Input input={this.state.input}></Input>
        <div className="row">
          <Button handleClick={this.createInput}>7</Button>
          <Button handleClick={this.createInput}>8</Button>
          <Button handleClick={this.createInput}>9</Button>
          <Button handleClick={this.createInput}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={this.createInput}>4</Button>
          <Button handleClick={this.createInput}>5</Button>
          <Button handleClick={this.createInput}>6</Button>
          <Button handleClick={this.createInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={this.createInput}>1</Button>
          <Button handleClick={this.createInput}>2</Button>
          <Button handleClick={this.createInput}>3</Button>
          <Button handleClick={this.createInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={this.createInput}>.</Button>
          <Button handleClick={this.createInput}>0</Button>
          <Button handleClick={this.handleEqual}>=</Button>
          <Button handleClick={this.createInput}>-</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={() => this.setState({input: ""})}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}
}

export default App; 
