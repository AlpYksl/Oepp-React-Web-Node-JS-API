import React, { Component } from 'react'
import { Container, Row, Col } from "reactstrap";
import CardUI from './CardUI';

export default class Cards extends Component {
    state = {
        games : []
    }
    componentDidMount(){
        this.getGames();
    }
    getGames = _ =>{
        fetch('http://localhost:3001/games/getGames')
        .then(response => response.json())
        .then(response => this.setState({ games : response.data}))
        .catch(err => console.error(err))
    }
    cardRow(){
        return this.state.games !== undefined && this.state.games.map(function(object,i){
            return <CardUI obj={object} key={i}/>
        })
    }
    render() {
       
        return (
        <div style={{paddingTop:100,paddingBottom:60}}> 
           <h1><b>Most Relevant Games</b></h1>
          <Row style={{backgroundColor:'#00E2FF'}}>         
                {this.cardRow()}
          </Row>
        
        </div>
           
           
        )
    }
}
