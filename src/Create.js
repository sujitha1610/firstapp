
import React, { Component } from 'react'

export default class Create extends Component {
    state={
        name:"",
        subject:""
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    click=()=>{
        fetch("https://reqres.in/api/users",{
            method:"POST",
            header:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({username:this.state.name,sub:this.state.subject})
        })
        .then((res)=>{
            console.log(res)
        })
    }
  render() {
    return (
      <div>
        <p><input
            name="name"
            placeholder="Enter your name"
            onChange={this.handleChange}/>
        </p>
        <p><input
            name="subject"
            placeholder="Enter your fav subject"
            onChange={this.handleChange}/>
        </p>
        <button onClick={this.click}>Submit </button>
      </div>
      
    )
  }
}