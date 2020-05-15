import React, { Component } from 'react';
import {NavLink} from 'reactstrap';
import { Link } from 'react-router-dom'

export default class CategoryCard extends Component {
    constructor(props){
        super(props);
    }
      displayImage(){
        let data = this.props.obj.CategoryImage;
        let buff = new Buffer(data);
        let base64data = buff.toString('base64');
        return base64data;
      }
      handleClickValue(){
          return this.props.obj.CategoryName
      }
      
    render() {
        return (
            <div className="card text-center shadow" style={{margin:10}}>
            <div className="overflow">
                <img className="card-img-top" src={`data:image/jpeg;base64,${this.displayImage()}`} style={{height:200,width:200}} alt="Image 1"/>
            </div>
            <div className="card-body text-dark" style={{height:160}}>
                <h4 className="card-title">{this.props.obj.CategoryName}</h4>
                <p className="card-text text-secondary" style={{fontSize:'1em'}}>
                   {this.props.obj.Routing + this.props.obj.ID}
                </p>
                <NavLink tag={Link} 
                to={{pathname:'/categoryList/',
                    state:{
                        CategoryName:this.props.obj.CategoryName,
                        ID:this.props.obj.ID
                    }
                   }}  >
                <button onclick={this.handleClickValue()} className="btn btn-deep-purple"  style={{color:'white',backgroundColor:'purple', width:'100px'}}>Go</button>
                </NavLink>
            </div>
        </div>
        )
    }
}
