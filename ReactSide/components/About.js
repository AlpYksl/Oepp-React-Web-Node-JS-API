import React, { Component } from 'react'


var pStyle = {
    fontSize:'25px',
    fontStyle:'italic'
}


export default class About extends Component {
    render() {
        return (
            <div>
               <div className='card-header' style={{backgroundColor:'#563d7c', marginTop:-3,paddingTop:100}} >
                   <h1 style={{textAlign:'center',color:'#fff'}}>Oepp Nedir?</h1>
               </div>
               <div className='card-body bg-light' style={pStyle} >
                <br/>
               <p><i class="fas fa-puzzle-piece" style={{float:'right',fontSize:'250px'}}></i>Oepp 2020 senesinde Beykent Üniversitesi Yazılım Mühendisliği bitirme projesi çatısı altında 
               yaratılmış sosyal medya uygulamasıdır. Bu sosyal medya uygulamasının amacı kullanıcı eğlenerek öğrenmenin 
               eşsiz hazzını yaşatabilmektir.    Web sitesi platformundan oyun içeriklerini yaratıp mobil(Android/iOS) olarak 
               yayınlayabilme imkanı tanımaktadır. </p>
               <ul>
                   <li>Kendi oyunu yaratmak için ;</li>
                   <li>Eğlenerek öğrenmek için ;</li> <br/>
               </ul>
               <button class="button" style={{verticalAlign:'middle'}}><span>Üye Ol </span></button>
               <button class="button" style={{verticalAlign:'middle'}}><span>Giriş Yap </span></button>
               <br/><br/><br/><br/>
               </div> 


            </div>     
        )
    }
}


