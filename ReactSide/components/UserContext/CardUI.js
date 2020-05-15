import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';

export default class CardUI extends Component {
    constructor(props){
        super(props)
    }
    displayImage(){
        let data = this.props.obj.GameImage;
        let buff = new Buffer(data);
        let base64data = buff.toString('base64');
        return base64data;
      }
    render() {
        return(
            <div className="card text-center shadow" style={{marginBottom:20,width:250,margin:10}}>
                <div className="overflow">
                    <img className="card-img-top" src={`data:image/jpeg;base64,${this.displayImage()}`} style={{height:200}} alt="Image 1"/>
                </div>
                <div className="card-body text-dark" style={{height:160}}>
                    <h4 className="card-title">{this.props.obj.GameTitle}</h4>
                    <p className="card-text text-secondary" style={{fontSize:'1em'}}>
                       {this.props.obj.GameDescription}
                    </p>
                    <NavLink tag={Link} 
                to={{pathname:'/productdetails',
                    state:{
                        GameID:this.props.obj.idGames,
                        GameTitle:this.props.obj.GameTitle
                    }
                   }}  >
                    <a href="#" className="btn btn-outline-danger">See Details</a>
                    </NavLink>
                </div>
                <div className="card-footer">
                    <p style={{fontSize:20}}>{this.props.obj.CategoryName}</p>
                </div>
            </div>
       
    );

    }

}