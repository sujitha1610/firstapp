import React, { Component } from 'react'

export default class Retrieve extends Component{
    state={
        students:[]
    }
    componentDidMount(){
        fetch("https://reqres.in/api/users?page=2")
        .then((res)=>{
            console.log(res)
            return res.json()

        })
        .then((res)=>{
            this.setState({
                students:res.data
            })
        })
    }
    render(){
    return (
      <div>
        <h1>Students and thier identities</h1>
        {
            this.state.students.map((std)=>(
                <div key={std.id}>
                    <p>Name:{std.first_name}</p>
                    <p>Email:{std.email}</p>
                    <p><img src={std.avatar} alt={std.last_name}></img></p>
                </div>
            ))
        }

      </div>
    )
    }
}