import React, { Component } from 'react'
import CommentBox from '../Reviews/CommentBox';
import FBShareButton from '../Reviews/FBShareButton';

export default class ProductCard extends Component {
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
        return (
           <div  style={{backgroundColor:'lightblue', border:'5px solid black'}}>
           <div style={{float:'left',paddingLeft:20,paddingTop:20}}>
            <img className="card-img-start" src={`data:image/jpeg;base64,${this.displayImage()}`} style={{height:500,width:350,float:'left'}} alt="Image 1"/>
            </div><div style={{float:'right',fontSize:'20px',paddingLeft:'20px',paddingTop:'10px',paddingRight:'20px',paddingBottom:'100px',color:'#FFF',fontSize:'25px'}}>
            <div style={{width:400}}>
                <p className="card-title"><b>Description: {this.props.obj.GameDescription}</b></p></div>
                <ul  style={{fontSize:'1em'}}>
                   <li>ReleaseTime: {this.props.obj.ReleaseTime}</li>
                   <li>Total Income: {this.props.obj.Income}$</li>
                   <li>CreatorName: {this.props.obj.username}</li>
                   <li>Email: {this.props.obj.email}</li>
                </ul>
                <FBShareButton/>
                <CommentBox />
              </div> 
              
            </div>
            
        )
    }
}
