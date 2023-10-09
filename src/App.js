import React, { Component } from "react";
import './App.css';
import Button from "./component/button";
import Result from "./component/result";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: "0"
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
      case '(':
      case ')':
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
      case '/':
        if (this.state.result === "0") {
          this.setState({
            result: this.state.result + value
          });
        }
        else {
          this.setState({
            result: this.state.result + value
          });
        }
        break;
      case '*':
        if (this.state.result === "0" || this.state.result === "-0") {
          this.setState({
            result: this.state.result + value
          });
        } else {
          this.setState({
            result: this.state.result + value
          });
        }
        break;
      case '=':
        if (this.state.result.includes("/0")) {
          this.setState({
            result: "Cannot divide"
          });
        } else {
          this.setState({
            result: eval(this.state.result)
          });
        }
        break;
      case 'c':
        this.setState({
          result: '0'
        })
        break;
      case '+/-':
        let Result = this.state.result;
        if (this.state.result === 0 || this.state.result === " ") {
          Result = "-0";
        } else if (this.state.result === "-") {
          Result = " ";
        } else {
          Result = parseInt(this.state.result, 10) * -1;
        }
        this.setState({
          result: Result
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
          if (sqnum >= 0) {
            const sqrtt = Math.sqrt(sqnum);
            this.setState({
              result: sqrtt.toString()
            });
          } else {
            this.setState({
              result: 'Invalid input'
            });
          }
          break;
      case 'log2':
        if (this.state.result === "0" || this.state.result === "-0") {
          this.setState({
            result: "invaild input"
          });
        } else {
          const numlog = parseFloat(this.state.result, 10);
          const log2 = Math.log(numlog);
          this.setState({
            result: log2.toString()
          });
        }
        break;
      case 'log10':
        if (this.state.result === "0" || this.state.result === "-0") {
          this.setState({
            result: "invaild input"
          });
        } else {
          const numlog10 = parseFloat(this.state.result, 10);
          const log10 = Math.log10(numlog10);
          this.setState({
            result: log10.toString()
          });
        }
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
        if (this.state.result === "0") {
          this.setState({
            result: Math.pow(10, 0)
          });
        } else {
          this.setState({
            result: Math.pow(10, this.state.result)
          });
        }
        break;
      case 'exp':
        if (this.state.result === "0") {
        } else {
          this.setState({
            result: parseFloat(this.state.result).toExponential()
          });
        }
        break;
      case 'd':
        alert("ปุ่มไม่พร้อม");

      default:
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
