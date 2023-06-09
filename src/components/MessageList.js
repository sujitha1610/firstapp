import React, { Component } from 'react'
import TakeMessage from './TakeMessage'
import DisplayMessage from './DisplayMessage'

export default class  extends Component {
    state={
        messageList:[]
    }
    addMessage=(s)=>{
        console.log(s)
        this.setState({
            messageList:[...this.state.messageList,s]
        })
    }
  render() {
    console.log("messagelistttttt",this.state.messaegList)
    return (
      <div>
        <TakeMessage onSubmit={this.addMessage}/>
        {
            this.state.messageList.map((m)=>(
                <DisplayMessage showMessage={m.text}/>
            ))
        }
      </div>
    )
  }
}