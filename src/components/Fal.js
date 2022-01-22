import React, { Component } from 'react'
import { useEffect } from 'react';
import {useHistory} from 'react-router-dom'


import Main from './Main';
const FAL_API = "https://ganjgah.ir/api/ganjoor/hafez/faal"

const SRC = 'https://ganjgah.ir/api/audio/file/';
const mp3 = '.mp3'


const Fal= ({title, plainText, htmlText, recitations}) => {

    useEffect(() => {
        fetch(FAL_API)
        .then((res) => res.json())
        .then ((data) => {
          console.log(data);
          document.getElementById("falAudio").src = SRC+ data.recitations[0].id + mp3;
          document.getElementById("poemContainer").innerHTML=data.htmlText;
        })
      }, [])
    return(
    <div className='container'>
        <div className='fal'>
            <div className='fal-info'>
                <h3>{title}</h3>
                <div className='poem'>
                    <div id="poemContainer" dir='rtl'></div>
                    <audio id="falAudio" controls 
                        className='audio'
                        src= "" 
                    >
                    </audio>
                </div> 
                
                <div className='fal-tabir'>
                    <p><b>:ای صاحب فال </b></p>
                    <p>به زودی خبرهای خوشی دریافت خواهی کرد. هر کجا داخل شعر می و ساقی و مطرب و بوس و کنار و آغوش و... بود، منظور قرب وجودی به درگاه حق تعالی است! حرف هم نباشه. جناب حافظ می‌فرمایند نماز اول وقت هم فراموش نشود</p>
                </div>
                <div className='btn-fal'>
                    <button className='btn' onClick={event =>  window.location.href='/'}>بازگشت به صفحه اصلی</button>
                    <button className='btn' onClick={event =>  window.location.href='/fal'} >فال مجدد</button>
                </div>
                
            </div>
        </div>
    </div> 
)}

function alpha() {
    
}


    

export default Fal
