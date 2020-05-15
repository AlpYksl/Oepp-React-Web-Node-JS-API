import React, { Component } from 'react'
import  { useState } from "react";
import ReactDOM from "react-dom";
import {Button} from "reactstrap"
const Question =()=>{
    const [inputList, setInputList] = useState([]);
    const onAddBlankClick =event =>{
    setInputList(inputList.concat(<Blank key={inputList.length}/>))
  }
  return(
    <div>
      {inputList}
      <button className="btn btn-primary" onClick={onAddBlankClick}>Add Question</button>
    </div>
  )
}
const Blank=()=>{
  return(
    <div style={{paddingBottom:20}}>
      <form>
      <input type ="text" name="blank">
      </input><input style={{marginLeft:10}}name="radioBtn" type="radio"></input><br/>
      <input type ="text" name="blank">
      </input><input style={{marginLeft:10}}name="radioBtn" type="radio"></input><br/>
      <input type ="text" name="blank">
      </input><input style={{marginLeft:10}}name="radioBtn" type="radio"></input><br/>
      <input type ="text" name="blank">
      </input><input style={{marginLeft:10}} name="radioBtn" type="radio"></input><br/></form>
    </div>
  )
}
const Input = () => {
  return (
    <div className="card-header">
    <p style={{fontSize:20}}><b>Enter question description here:</b></p>
   <textarea style={{width:'50em'}} placeholder="Write here to your question's description in this place.
    e.g 'This question includes Nelson Mendela'  personal life.'"/><br/><br/>
   <p style={{fontSize:20}}><b>Write your question below box:</b></p>
   <textarea style={{width:'50em'}} placeholder="Write here to your question in this place.
    e.g 'When Nelson Mendela died? '"/><br/><br/>
    <p style={{fontSize:20,width:'25em'}}>Press the button for adding answers.You write your sentence's word box/boxes. And please checked each one of them for your question.</p>
 <Question/>
  </div>
  );
};

const Form = () => {
  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = event => {
    setInputList(inputList.concat(<Input key={inputList.length} />));
  };

  return (
    <div style={{float: 'center'}}>
    
      {inputList}
      <button className="btn btn-primary" style={{width:'20em'}} onClick={onAddBtnClick}>Add New Line</button>
    </div>
  );
};
export default class FlashCards extends Component {
    render() {
        return (
            <div>
             <p style={{fontSize:'20px',marginLeft:10}}><i>Press the "Add Line" button when you are ready for preparing questions.</i></p>
                <Form style={{paddingTop:'50px'}}/>
            </div>
        )
    }
}

