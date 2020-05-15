import React, { Component } from 'react'
import ProductCard from './ProductCard';
export default class ProductDetails extends Component {
    constructor(props){
        super(props)
    }
    state = {
        product: []
    }
    componentDidMount(){
        this.getProductDetails();
    }
    getProductDetails = _ =>{
        fetch('http://localhost:3001/contents/getContents/'+this.props.history.location.state.GameID)
        .then(response => response.json())
        .then(response => this.setState({ product: response.data}))
        .catch(err => console.error(err))
    }
    cardRow() {
        return this.state.product.map(function(object,i){
            return <ProductCard obj={object} key = {i}/>
        })
    }
    render() {
        return (
            <div style={{paddingTop:100}}> 
            
            <div className="card-header" style={{border:'3px dashed lightblue',backgroundColor:'#fff'}}>
        <h1 style={{textAlign:'center'}}><b>You are looking for {this.props.history.location.state.GameTitle} details.</b> </h1></div>
            <div className="card-body btn-group" style={{marginBottom:100,marginTop:-10, paddingLeft:100}}>
             <button className="button" style={{verticalAlign:'middle',backgroundColor:'#293BD3',borderRadius:'12px'}}><span>Return Home Page </span><i className="fas fa-home">
                 </i><i className="fas fa-arrow-left" style={{paddingLeft:5}}></i></button>
            <button class="button" style={{verticalAlign:'middle',backgroundColor:'#44bcff'}} ><span>Create Your Game </span><i className="fas fa-puzzle-piece">
                 </i><i className="fas fa-book" style={{paddingLeft:5}}></i></button>
              <div className="container-fluid d-flex justify-content-center" style={{paddingTop:100}}>
                  <div className="row">
                  
                      {this.cardRow()}
                  </div>
                  </div>
              </div>
           </div>
        )
    }
};


 