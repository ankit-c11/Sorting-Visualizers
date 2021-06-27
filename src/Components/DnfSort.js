import React from 'react'
import Button from './Button'
import Bar from './Bar'

class DnfSort extends React.Component{
    constructor(props){
      super(props);
      let numbers = [];
      let basket = [0,0,2,2,1,1,1,1,2,0,0,0,1,0,0,2,1,1,1,0,0,1,1,2,2,2,2,0,0,1,2]
      for(let i = 0; i < 16; i++){
        let idx = Math.floor(Math.random()*basket.length)
        numbers.push(basket[idx])
      }
   
      this.state = {numbers}
      
      this.loggerRef = React.createRef()
    }
    startSort = () => {
      if(this.intervalId){
        return;
      }
      var low = 0;
      var curr = 0;
      var high = this.state.numbers.length-1
      this.setState({low,high,curr})
      this.intervalId = setInterval(this.dnfSort,900)
    }
    logger = (a,b) => {
      this.loggerRef.current.innerHTML += `<div>Swapped indices ${a} and ${b}</div>`
    }
    dnfSort = () => {
      var {numbers,low,high,curr} = this.state
      if(curr > high){
        this.setState({curr:-1})
        clearInterval(this.intervalId);return;
      }
  
      switch(numbers[curr]){
        case 0:
          [numbers[curr],numbers[low]] = [numbers[low],numbers[curr]];
          this.logger(low,curr);
          low++;curr++;
          this.setState({numbers,low,curr});break;
        case 1:
          curr++;
          this.setState({curr});break;
        case 2:
           [numbers[curr],numbers[high]] = [numbers[high],numbers[curr]];
          this.logger(curr,high)
           high--;
          this.setState({numbers,high});break;
        default:
            break;
      }
    }
    render(){
      var jsx = this.state.numbers.map((n, idx) => {
        var backgroundColor = (n===0) ? '#AE1C28':(n===1 ?'white':'#21468B');
        var bcolor = (n===0) ? '#ff7f78':(n===1 ?'#edeff7':'#889cf7');
        var borderMarker = (idx===this.state.curr) ? 'dashed':'solid';
        var border= `${borderMarker} 2px ${bcolor}`
        var customStyle = {backgroundColor,border,height:'350px'};

        return (<Bar key={idx} type='dnf' customStyle={customStyle} />);
      });
      return (
        <div className='main-div'>
            <div className='bars-container'>
                {jsx}
            </div>
            <Button startSort={this.startSort} title={'DNF Sort'}/>
          <div style={{color:"white"}}>Low:{this.state.low}  Curr:{this.state.curr}  High:{this.state.high}</div>
          <div ref={this.loggerRef} className='loggerDiv'>
            
          </div>
        </div>
      );
    }
}

export default DnfSort;