import React, { Component } from 'react'
import "./App.css"
 
export class Component1 extends Component {
    constructor(props) {
        super(props)

    this.validateText=this.validateText.bind(this)
        this.state = {
            score:0,
            list:[]
        
        }
    }
    validateText()
    {
        var psh = document.getElementById("lst").value
        if(psh==="")
        {
            alert("Enter some text")
        }
        else
        {
              this.setState({list:[...this.state.list,psh]})
             
        }
    }
   
    render() {
        let list = this.state.list
        
        return (
            // <div className={this.props.a}>
            //    {/* <h1>{this.props.name}</h1> */}
            //     <p>{this.state.score}</p>
            //     <button onClick={()=>{
            //         this.setState({score:this.state.score+1})
            //     }}>Increment</button>
            //     <button onClick={()=>{
            //         this.setState({score:this.state.score-1})
            //     }}>Decrement</button>
            //     <button onClick={()=>{
            //         this.setState({score:0})
            //     }}>Reset</button>
 
            // </div>
            <div>
                <input type="text" id="lst"></input>
                <button onClick={this.validateText}>Click</button> 
                <div>{list.forEach((value)=><p>{value}</p>)}</div>
            </div>
        )
    }
}
 
export default Component1