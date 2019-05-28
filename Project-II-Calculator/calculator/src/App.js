import React from 'react';
import './App.scss';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

// const arrObj = [{text: 'clear', class:'clearButton'},{text:'÷'}]

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      calcDisplay: '0',
      keyPress: [],

    }
  }
  buttonClick = (event) => {
    if (event.target.textContent === 'clear'){
      this.setState({calcDisplay: '0', keyPress: []})
    }
    else if(event.target.textContent === '='){
      let mathArr = this.state.keyPress.map(digit => {
        if (digit === 'x') return '*'
        else if (digit === '÷') return '/'
        else return digit
      })
      mathArr = mathArr.join('')
      // console.log((mathArr))
      this.setState({calcDisplay: eval(mathArr), keyPress: []})
      // console.log(this.state)
    }
    else{
      this.setState({keyPress: [...this.state.keyPress, event.target.textContent], calcDisplay: `${this.state.keyPress.join('')}${event.target.textContent}`})
    }
  }
  render(){
    return (
      <div className='container'>
        <CalculatorDisplay text={this.state.calcDisplay} />
        <ActionButton text='clear' buttonStyle='clearButton' whenClicked={this.buttonClick}/>
        <ActionButton text='÷' whenClicked={this.buttonClick}/>
        <NumberButton text='7' whenClicked={this.buttonClick}/>
        <NumberButton text='8' whenClicked={this.buttonClick}/>
        <NumberButton text='9' whenClicked={this.buttonClick}/>
        <ActionButton text='x' whenClicked={this.buttonClick}/>
        <NumberButton text='4' whenClicked={this.buttonClick}/>
        <NumberButton text='5' whenClicked={this.buttonClick}/>
        <NumberButton text='6' whenClicked={this.buttonClick}/>
        <ActionButton text='-' whenClicked={this.buttonClick}/>
        <NumberButton text='1' whenClicked={this.buttonClick}/>
        <NumberButton text='2' whenClicked={this.buttonClick}/>
        <NumberButton text='3' whenClicked={this.buttonClick}/>
        <ActionButton text='+' whenClicked={this.buttonClick}/>
        <NumberButton text='0' buttonStyle='zeroButton' whenClicked={this.buttonClick}/>
        <ActionButton text='=' whenClicked={this.buttonClick}/>
      </div>
    );
  
  }
}

export default App;
