import React, { Component } from "react";
import './App.css';
import Button from "./component/button";
import Result from "./component/result";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: "0",
    }
    this.handleclicks = this.handleclicks.bind(this);
  }

  handleclicks = (value) => {
    switch (value) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
      case '+':
      case '-':
      case '/':
      case '*':
      case '(':
      case ')':
        //case 'mod':
        if (this.state.result === "0") {
          this.setState({
            result: value
          });
        } else {
          this.setState({
            result: this.state.result + value
          });
        }
        break;
      case '=':
        console.log(this.state.result);
        this.setState({
          result: eval(this.state.result)
        })
        break;
      case 'c':
        this.setState({
          result: '0'
        })
        break;
      case '+/-':
        this.setState({
          result: parseInt(this.state.result, 10) * -1
        });
        break;
      case '%':
        this.setState({
          result: parseFloat(this.state.result, 10) / 100
        });
        break;
      case 'x^2':
        const num1 = parseFloat(this.state.result, 10);
        const power = num1 * num1;
        this.setState({
          result: power.toString()
        });
        break;
      case 'sqrt':
        const sqnum = parseFloat(this.state.result, 10);
        const sqrtt = Math.sqrt(sqnum);
        this.setState({
          result: sqrtt.toString()
        });
        break;
      case 'log2':
        const numlog = parseFloat(this.state.result, 10);
        const log2 = Math.log(numlog);
        this.setState({
          result: log2.toString()
        });
        break;
      case 'log10':
        const numlog10 = parseFloat(this.state.result, 10);
        const log10 = Math.log10(numlog10);
        this.setState({
          result: log10.toString()
        });
        break;
      case 'mod':
        this.setState({
          result: this.state.result + '%'
        });
        break;
      case '|x|':
        this.setState({
          result: Math.abs(this.state.result)
        });
        break;
      case 'n!':
        if (this.state.result === "0") {
          this.setState({
            result: '1'
          });
        } else {
          function factorial(n) {
            if (n === 1) {
              return 1;
            } else {
              return n * factorial(n - 1);
            }
          }
          this.setState({
            result: factorial(this.state.result)
          });
        }
        break;
      case '10^x':
        this.setState({
          result: Math.pow(10, this.state.result)
        });
        break;
      case 'exp':
        if (this.state.result === "0") {

        } else {
          this.setState({
            result: Math.exp(this.state.result)
          });
        }
        break;
      case 'd':
        alert("กดทำไม");
    }


  }

  render() {
    return (<div className="myCalculator" >
      <Result result={this.state.result} />
      <Button Buttonclicked={this.handleclicks} />
    </div>
    );
  }
}

export default App;
