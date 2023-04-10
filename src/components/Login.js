import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {
   state={
      user:'',
      pswd:''
   }
   handlechange=(e)=>{
      console.log(e)
      this.setState({
         [e.target.name]:e.target.value
      })
   }
   send=()=>{
      //data obj key names are from the api(sir gaari api)
      let data={
         username:this.state.user,
         password:this.state.pswd
      }
      axios.post("http://65.0.100.29:2008/add",data)
      .then((d)=>{
         console.log(d)
      })
      console.log(this.state.user, this.state.pswd)
      this.setState({
         user:'',
         pswd:''
      })
   }
  render() {
    return (
      <div>
         <input value={this.state.user} name="user" placeholder='name' onChange={this.handlechange}/><br/>
         <input value={this.state.pswd} name="pswd" placeholder='password' onChange={this.handlechange}/><br/>
         <button onClick={this.send}>submit</button>
      </div>
    )
  }
}
