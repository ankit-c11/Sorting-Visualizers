import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import BubbleSort from './BubbleSort'
import InsertionSort from './InsertionSort'
import SelectionSort from './SelectionSort'
import MergeSort from './MergeSort'
import DnfSort from './DnfSort'
import Header from './Header'
import AlgorithmList from './AlgorithmList'
class App extends React.Component{
    render(){
        return (
            <div>                
                <BrowserRouter>
                    <div>
                        < Header />
                    </div>
                    <Route path='/' exact component={AlgorithmList} />
                    <Route path='/BubbleSort' component={BubbleSort} />
                    <Route path='/InsertionSort' component={InsertionSort} />
                    <Route path='/SelectionSort' component={SelectionSort} />
                    <Route path='/MergeSort' component={MergeSort} />   
                    <Route path='/DnfSort' component={DnfSort} />               
                </ BrowserRouter>
            </div>
        )
    }
}

export default App