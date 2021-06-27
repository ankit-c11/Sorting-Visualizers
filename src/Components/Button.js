import React from 'react'

class Button extends React.Component{
    render(){
        return (
            <button className='start-sort-button'
            onClick={this.props.startSort}
            >
                {this.props.title}
            </button>
        )
    }
}

export default Button