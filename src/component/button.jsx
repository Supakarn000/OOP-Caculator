import React, { Component } from "react";

class Button extends Component {

  constructor(props) {
    super(props);
    this.handleclicks = this.handleclicks.bind(this);
  }

  handleclicks = (event) => {
    this.props.Buttonclicked(event.target.value)
  }

  render() {

    return (
      <div className="buttons">
        <div className="row0">
          <div class="dropdown">
            <button class="dropdown menu">Trigonometry</button>
            <div class="dropdown-content">
              <button className="dropdown-btn" value="d" onClick={this.handleclicks}>sin</button>
              <button className="dropdown-btn" value="d" onClick={this.handleclicks}>Cos</button>
              <button className="dropdown-btn" value="d" onClick={this.handleclicks}>Tan</button>
              <button className="dropdown-btn" value="d" onClick={this.handleclicks}>Sec</button>
              <button className="dropdown-btn" value="d" onClick={this.handleclicks}>Csc</button>
              <button className="dropdown-btn" value="d" onClick={this.handleclicks}>Cot</button>
            </div>
          </div>
        </div>
        <div class="dropdown">
          <button className="menu" onClick={this.handleclicks} value="Function">Function</button>
          <div class="dropdown-content">
            <button className="dropdown-btn" value="d" onClick={this.handleclicks}>Abs</button>
            <button className="dropdown-btn" value="d" onClick={this.handleclicks}>Floor</button>
            <button className="dropdown-btn" value="d" onClick={this.handleclicks}>Ceil</button>
            <button className="dropdown-btn" value="d" onClick={this.handleclicks}>Rand</button>
            <button className="dropdown-btn" value="d" onClick={this.handleclicks}>Dms</button>
            <button className="dropdown-btn" value="d" onClick={this.handleclicks}>Deg</button>
          </div>
        </div>
        <div className="row1">
          <button className="btnrow" onClick={this.handleclicks} value="c">C</button>
          <button className="btnrow" onClick={this.handleclicks} value="+/-">+/-</button>
          <button className="btnrow" onClick={this.handleclicks} value="%">%</button>
          <button className="btnrow" onClick={this.handleclicks} value="/">÷</button>
          <button className="btnrow" onClick={this.handleclicks} value="mod">mod</button>
        </div>
        <div className="row2">
          <button className="btn btn-calc" onClick={this.handleclicks} value="sqrt">√</button>
          <button className="btnnum" onClick={this.handleclicks} value="7">7</button>
          <button className="btnnum" onClick={this.handleclicks} value="8">8</button>
          <button className="btnnum" onClick={this.handleclicks} value="9">9</button>
          <button className="btnrow" onClick={this.handleclicks} value="*">x</button>
        </div>
        <div className="row3">
          <button className="btn btn-calc" onClick={this.handleclicks} value="log2">log2</button>
          <button className="btnnum" onClick={this.handleclicks} value="4">4</button>
          <button className="btnnum" onClick={this.handleclicks} value="5">5</button>
          <button className="btnnum" onClick={this.handleclicks} value="6">6</button>
          <button className="btnrow" onClick={this.handleclicks} value="-">-</button>
        </div>
        <div className="row4">
          <button className="btn btn-calc" onClick={this.handleclicks} value="log10">log10</button>
          <button className="btnnum" onClick={this.handleclicks} value="1">1</button>
          <button className="btnnum" onClick={this.handleclicks} value="2">2</button>
          <button className="btnnum" onClick={this.handleclicks} value="3">3</button>
          <button className="btnrow" onClick={this.handleclicks} value="+">+</button>
        </div>
        <div className="row5">
          <button className="btn btn-calc" onClick={this.handleclicks} value="x^2">x^2</button>
          <button className="btn" onClick={this.handleclicks} value=".">.</button>
          <button className="btnnum" onClick={this.handleclicks} value="0">0</button>
          <button className="btnrow" onClick={this.handleclicks} value="=">=</button>
          <button className="btn btn-calc" onClick={this.handleclicks} value="|x|">|x|</button>
        </div>
        <div className="row6">
        <button className="btn btn-calc" onClick={this.handleclicks} value="10^x">10^x</button>
        <button className="btn btn-calc" onClick={this.handleclicks} value="exp">exp</button>
        <button className="btn btn-calc" onClick={this.handleclicks} value="n!">n!</button>
        <button className="btn btn-calc" onClick={this.handleclicks} value="(">(</button>
        <button className="btn btn-calc" onClick={this.handleclicks} value=")">)</button>
        </div>
      </div>
    )
  }
}


export default Button;