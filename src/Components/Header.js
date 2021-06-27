import React from 'react'
import {Link} from 'react-router-dom'

class Header extends React.Component{
    render(){
        return(
            <div id='title-main'><Link to='/' style={{color:'#f1f1f1'}}>Sorting  Algorithm   Visualizers</ Link></div>
        )
    }
}

export default Header