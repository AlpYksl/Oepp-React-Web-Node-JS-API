import React, { Component } from 'react'
var style = {
    backgroundColor: "#fff",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}
var iconStyle={
    float:"left",
    fontSize:'40px',
    marginBottom:'100px',
}
var phantom = {
  display: 'block',
  padding: '20px',
  height: '40px',
  width: '100%',
}
function Footer({ children }) {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
           
            <i className="fab fa-facebook-square" style={iconStyle}></i>
            <i className="fab fa-instagram" style={iconStyle}></i>
            <i className="fab fa-twitter-square" style={iconStyle}></i>
            <i className="fab fa-apple" style={{float:'right',fontSize:'40px'}}></i>
            <i className="fab fa-android" style={{float:'right',fontSize:'40px'}}></i>
            <p>Powered by Oepp</p>
            </div>
        </div>
    )
}
export default Footer;