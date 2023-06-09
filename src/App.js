import React,{Component} from 'react'
import Retrieve from './Retrieve'
import Create from './Create'
export default class App extends Component {
  state={
    data:[
      {id:1,name:"ravi"},
      {id:2,name:"Teja"},
      {id:3,name:"SITA"},
      {id:4,name:"siri"},
      {id:5,name:"sandy"}
    ],
    text:""
  }
  handlechange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })

  }
  render(){
    let duplicate_data=[];
    const pair=this.state.text.toString().trim().toLowerCase()
    if(pair&&pair.length>0){
      duplicate_data=this.state.data.filter((i)=>{
        return i.name.toLowerCase().match(pair)
      })
    }
    console.log(duplicate_data)
    return (
      <div>
        {/* <input
        name="text"
        placeholder='Enter to search'
        onChange={this.handlechange} />
        {
          duplicate_data.map((matchedData)=>(
            <p>{matchedData.name}</p>
          ))
        } */}
        <Retrieve/>
        <Create/>
      </div>
    )
  }
}




























// import React from 'react'
// import Prop from './prop'
// import MessageList from './components/MessageList'
// class App extends React.Component{
//   state={
//     subject:"reactjs",
//     year:2013
//   }
//   render(){
//     return(
//       <div>
//         <MessageList/>
//       {/* <p>This is a class component for App</p>
//       <h1>This is head tag</h1>
//       <p>{this.state.subject} {this.state.year}</p>
//       <Prop name="sujitha" age= "21"/>
//       <Prop name="Siri" age="20"/> */}
//       </div>
//     )
//   }
// }
// export default App
