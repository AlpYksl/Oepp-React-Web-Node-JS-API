import React, { Component } from 'react'
import Cards from './UserContext/Cards';
import { NavLink, Link } from 'react-router-dom';
import logo from '../components/oepp_logo.png'
export default class Home extends Component {
    render() {
        var bstyle={
            fontSize:20
        }
        return (
            <div style={{marginBottom:100,marginTop:-10, paddingLeft:30,paddingTop:110}}>      
               <div className="card-header" style={{border:'4px dashed lightblue',backgroundColor:'#FFF'}}>
                    <h1 style={{textAlign:'center',fontSize:30}}><i>Most Popular Games In Our Storage</i>
                        <i class="fa fa-book" aria-hidden="true" style={{float:'left',fontSize:45}}></i>
                        <i class="fa fa-gamepad" style={{float:'left',fontSize:45,paddingTop:-10}} aria-hidden="true"></i> 
                        <img src={logo}  style={{float:'right' ,width:70, height:70,paddingBottom:30}}/>
                    </h1>
               </div>
               <div className="btn-group-vertical col-md-4 float-left" style={{paddingTop:30,paddingLeft:10}}> 
                    <NavLink to={"/profile"} tag={Link}> 
                    <button className="button" style={{backgroundColor:'#00C3FF',borderRadius:'20em',width:300}}><h5 style={bstyle}>Make Your Own Game</h5></button>
                    
                    </NavLink>
              </div><br/><br/><br/>
                <Cards/>
            </div>
        )
    }
}
