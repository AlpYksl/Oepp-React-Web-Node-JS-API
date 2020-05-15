import React, { Component } from 'react'
import CardUI from'../UserContext/CardUI';



export default class CategoryList extends Component {
    constructor(props){
        super(props)
    }
    state = {
        categories: []
    }
    componentDidMount(){
        this.getGameCategories();
    }
    getGameCategories = _ =>{
        fetch('http://localhost:3001/games/getGames/'+this.props.history.location.state.ID)
        .then(response => response.json())
        .then(response => this.setState({ categories: response.data}))
        .catch(err => console.error(err))
    }
    cardRow() {
        return this.state.categories.map(function(object,i){
            return <CardUI obj={object} key = {i}/>
        })
    }
    render() {
        return (
            <div style={{paddingTop:100}}> 
            <div className="card-header">
        <h1 style={{textAlign:'center'}}><b>You are looking for {this.props.history.location.state.CategoryName} category.</b> </h1></div>
            <div className="card-body" style={{marginBottom:100,marginTop:-10, paddingLeft:100,paddingTop:10}}>
            
              <div className="container-fluid d-flex justify-content-center" style={{paddingTop:100}}>
                  <div className="row">
                  
                      {this.cardRow()}
                  </div>
                  </div>
              </div>
           </div>
        )
    }
}
