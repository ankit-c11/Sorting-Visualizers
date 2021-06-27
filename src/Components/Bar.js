import React from 'react'

class Bar extends React.Component{
    render(){
        if(this.props.type==='dnf'){
            return(<div className='bar' style={this.props.customStyle}>
                {this.props.n}
            </div>);
        }
        return(
            <div className='bar' style={{...this.props.customStyle,height: `${10 * this.props.n + 50}px`}}>
                {this.props.n}
            </div>
        )
    }
}

export default Bar