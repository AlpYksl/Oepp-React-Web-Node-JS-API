import React, { Component } from 'react'
import  { useState } from "react";
import ReactDOM from "react-dom";
import {Button} from "reactstrap"
import FillInBlanks from './FillInBlanks';
import FlashCards from './FlashCards';
import SpecialCase from './SpecialCase';

export default class Questions extends Component {
  constructor(props){
    super(props)
    this.state = {
      submitting: false,
     
      ReleaseTime:"",
      Income:0,
      Gameid:0,
      usr_id:0,
      categories: [],
      users:[]    
  }
  }
  
  setReleaseTime(event) {
    this.setState({
        ReleaseTime:event.target.value
    })  
 }
 setIncome(event) {
  this.setState({
      Income: event.target.value
  })  
}


setGameid(event) {
  this.setState({
      Gameid:event.target.value
  })  
}
setUserID(event) {
  this.setState({
      usr_id: event.target.value
  })  
}
submitClick(event){
  event.preventDefault();
  this.setState({
      submitting: true
  });
  const params = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
         idContent:this.state.idContent,
          ReleaseTime: this.state.ReleaseTime,
          Income: this.state.Income,
          Gameid: this.state.Gameid,
          usr_id: this.state.usr_id,
      })
  }
  fetch("http://localhost:3001/contents/add", params)
      .then(res => res.json())
      .then(result => {
          console.log(result);
          if(result.status === "success"){
              alert("Content Added Succesfully!!");
          }
          if(result.status === "error"){
              alert(result.message);
          }
          this.setState({
              submitting: false
          });
      });
}
  routePage = (value) =>{
    if(value ==1){
      return (
        <div> 
          <div className="card-header" style={{border:'3px solid lightblue',backgroundColor:'#fff'}}>
            <h1 style={{textAlign:'center'}}>Fill in blanks page please define your questions.</h1>
          </div>
          <div style={{float:'right',paddingRight:10,paddingTop:20}}>
           <img style={{float:'right'}} src="https://static1.squarespace.com/static/55c04305e4b0e6d1aa6219d5/t/57c67a2eb8a79ba9708e308d/1472625199242/fill_in_the_blank_bad_day_game.jpg" alt="flashcard"/>
          </div>
          <div style={{padding:'10px',paddingTop:'30px',width:'50%'}}>
            <FillInBlanks/>
          </div>
        </div>
    )
    }else if(value==0){
      return (
        <div>
        
          <div className="card-header" style={{border:'3px solid lightblue',backgroundColor:'#fff'}}>
            <h1 style={{textAlign: 'center'}}>Flash Cards page please define your questions.</h1>
          </div>
          <div style={{float:'right',paddingRight:10,paddingTop:20}}>
           <img style={{float:'right',width:'100%',height:'100%'}} src="https://www.makemyassignments.com/blog/wp-content/uploads/2018/09/alphabet-flashcards-2x.png" alt="flashcard"/>
            </div>
          <div style={{padding:'10px',paddingTop:'30px',width:'50%',paddingLeft:20}}>
            <FlashCards/>
            
          </div>
        </div>
    )
    }else
    return "Nothing selected"
  }
  componentDidMount(){
    this.getGameCategories();
    this.getUserID();
}
getGameCategories = _ =>{
    fetch('http://localhost:3001/contents/getGameid?name='+this.props.history.location.state.GameName)
    .then(response => response.json())
    .then(response => this.setState({ categories: response.data}))
    .catch(err => console.error(err))
}
getUserID = _ =>{
  fetch('http://localhost:3001/contents/getUserid?name='+this.props.history.location.state.Username)
  .then(response => response.json())
  .then(response => this.setState({ users: response.data}))
  .catch(err => console.error(err))
}

cardRow() {
  return this.state.categories.map(function(object,i){
      return <SpecialCase obj={object} key = {i}/>
  })
}
renderUser =  ({UserID}) => <div key={UserID}>{UserID}</div>
    render() {
      const {users} =this.state;
        return (
            <div style={{paddingTop:100}}>  
              {this.routePage(this.props.history.location.state.GameTemp)}
              <form style={{paddingLeft:20}}>
                <tr>           
                  <input type="number"  id="ReleaseTime" onChange = {this.setReleaseTime.bind(this)} type="text" placeholder="Enter title here..."></input>
                </tr>
                <tr>           
                  <p id="Income" onChange = {this.setIncome.bind(this)}  type="text" placeholder="Enter title here...">{0}</p>
                </tr>
                <p id="Gameid" onChange = {this.setGameid.bind(this)} type="text" placeholder="Enter title here..." >{this.cardRow()}</p>  
                <p id="usr_id" onChange = {this.setUserID.bind(this)} type="text" placeholder="Enter title here..." >{users.map(this.renderUser)}</p> 
                {this.state.submitting === true ?
                <button className="btn btn-info" style={{backgroundColor:"#17a2b8" ,fontSize:16}} type="button" disabled>
                  <span className="spinner-border spinner-border-md" role="status" aria-hidden="true"></span>
                  &nbsp;Submitting...
                </button>
                : 
                <button type="submit" onClick={this.submitClick.bind(this)} className="btn btn-primary" style={{backgroundColor:"#17a2b8" ,fontSize:16}} >Save</button>
                } 
             </form>
          </div>
        )
      }
    }