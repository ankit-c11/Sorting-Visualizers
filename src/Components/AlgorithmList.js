import React from 'react'
import {Link} from 'react-router-dom'

class AlgorithmList extends React.Component{
    render(){
        return(
            <div className='routes-container'>
                <div className='link'><Link to='/BubbleSort'>Bubble Sort</ Link></div>
                <div className='link'><Link to='/InsertionSort'>Insertion Sort</ Link></div>
                <div className='link'><Link to='/SelectionSort'>Selection Sort</ Link></div>
                <div className='link'><Link to='/MergeSort'>Merge Sort</ Link></div>
                <div className='link'><Link to='/DnfSort'>DNF Sort</ Link></div>
            </div>
        )
    }
}

export default AlgorithmList