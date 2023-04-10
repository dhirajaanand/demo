import React, { Component } from 'react'
import axios from 'axios'
export default class Home extends Component {
   state={

   }
  componentDidMount(){
   axios.get("http://65.0.100.29:2008/bring")
   .then((d)=>{
      console.log(d.data)
   })
  } 
  render() {
    return (
      <div>
         homu
      </div>
    )
  }
}
