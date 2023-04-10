import React, { Component } from 'react'
import axios from 'axios'
export default class Products extends Component {
   state={
      products:[]
   }
   componentDidMount(){
      axios.get("http://65.0.100.29:2008/products")
         .then((d)=>{
            console.log(d)
            this.setState({
               products:d.data
            })
            
         })
   }
  render() {
    return (
      <div>
         {this.state.products.map((d)=>(
                <div key={d.image}>
                  <p>Name:{d.name}</p>
                  <p><img src={d.image} width="20%" alt={d.name} /></p>
                  <p>price:{d.price}</p>
               </div> 
            ))
         }
      </div>
    )
  }
}
