import React, { Component } from 'react'

export default class ApiCall extends Component {

    state={
        data:[],
        getData: false,

      }
    // insert data url
      apiUrl = ' '
    
    
    componentDidMount(){
      fetch(this.apiUrl)
      .then(url=>url.json())
      .then((dataJson)=>this.setState({
        data: dataJson/*.smth*/,
        getData:true,
      }))
    }
    
    



    render() {
        return (
            <div>
                {this.state.getData
                ?<h1>hello!</h1>
                :<h1>Something Wrong with API</h1>}                
            </div>
        )
    }
}
