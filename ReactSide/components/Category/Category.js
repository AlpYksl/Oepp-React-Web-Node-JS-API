import React, { Component } from 'react'
import CategoryCard from './CategoryCard';
 class Category extends Component {
     state = {
         categories: []
     }
     componentDidMount(){
            this.getCategories();
     }
     getCategories = _ =>{
         fetch('http://localhost:3001/category/getCategory')
         .then(response => response.json())
         .then(response => this.setState({ categories: response.data}))
         .catch(err => console.error(err))
     }
      cardRow() {
          return this.state.categories !== undefined && this.state.categories.map(function(object,i){
              return <CategoryCard obj={object} key = {i}/>
          })
      }
     
     renderCategory = ({ID,CategoryName,CategoryImage,Routing}) => <div key={ID}>{CategoryName}</div>
    render() {
        //const {categories} = this.state;
        return (
            <div style={{paddingTop:100}}> 
            <div className="card-header">
            <h1 style={{textAlign:'center'}}>Explore Oepp Categories find knowledge what you need !</h1></div>
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
export default Category

