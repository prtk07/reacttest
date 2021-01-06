import React, { Component } from 'react'

export class ComponentB extends Component {
    
    render() {
        return (
            <div>
                <button onClick={this.props.values}>click</button>
                {/* <h2>{this.props.surname}</h2> */}
                
                
            </div>
        )
    }
}


export default ComponentB
