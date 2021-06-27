import React from 'react'
import Button from './Button'
import Bar from './Bar'

var style={
  backgroundColor: "#00bb77",
backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cpolygon fill='%23000' fill-opacity='.1' points='120 0 120 60 90 30 60 0 0 0 0 0 60 60 0 120 60 120 90 90 120 60 120 0'/%3E%3C/svg%3E")`
}

class SelectionSort extends React.Component{
    state = {
    numbers: [12, 7, 10, 3, 17, 29, 22,8, 25, 33,  18, 24, 2, 15],
    i: 0,
    j: 1,minIdx:0
  };
  startSort = () => {
    if(this.intervalId){
      return;
    }
    this.intervalId = setInterval(this.selectionSort,300)
  }
  selectionSort = () =>{

    var {numbers,i,j,minIdx} = this.state
    if(i === numbers.length - 1){
      clearInterval(this.intervalId)
      return;
    }
    else{
      if(j === numbers.length){
        [numbers[i],numbers[minIdx]] = [numbers[minIdx],numbers[i]]
        i++;j=i+1;minIdx=i;
        this.setState({numbers,i,j,minIdx})
      }
      else{
        if(numbers[j] < numbers[minIdx]){
            minIdx = j;
        }
        j++;
        this.setState({j,minIdx})
      }
    }
    
  }
  render() {
    var {j,minIdx} = this.state;
    var jsx = this.state.numbers.map((n, i) => {
      var backgroundColor = this.state.i === i ||minIdx === i || j-1 === i ? "#2b304f" : "#301911";
      var border= "solid 2px #d1d1d1";
      var customStyle = {backgroundColor,border};
      return (<Bar key={i} customStyle={customStyle} n={n} />);
    });
    return (
        <div className='main-div' style={style}>
            <div className='bars-container'>
                {jsx}
            </div>
            <Button startSort={this.startSort} title={'Selection Sort'}/>
      </div>
    );
  }
}
export default SelectionSort