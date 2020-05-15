import React, { Component } from 'react';
export default class FBShareButton extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        url : window.location.href
      }
    }
    
    render(){
      let encodedURL = encodeURI(this.state.url);
      return(
        <a href={`https://facebook.com/sharer/sharer.php?href=${encodedURL}`}><i className="fab fa-facebook-square"/> Share on Facebook </a>
      )
    }
  }
  