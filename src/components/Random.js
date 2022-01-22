import React, { useState, useEffect } from 'react';

const Rand_API = "https://ganjgah.ir/api/ganjoor/poem/random"
const Poet_API = "https://ganjgah.ir/api/ganjoor/poets"

function Random({htmlText, title}) {
  const [random, setRandom] = useState([])
  const [src, setSrc] = useState([])

  useEffect(() => {
    fetch(Rand_API)
    .then((res) => res.json())
    .then((data) =>{
      document.getElementById("randomPoem").innerHTML=data.htmlText;
      setRandom();
      console.log(data)
    })
  }, [])

  useEffect(() => {
    fetch(Poet_API)
    .then((res) => res.json())
    .then((data) =>{
      setSrc("https://ganjgah.ir" + data.poet.imageUrl);
      console.log(data)
    })
  }, [])
  return <div>
      <img src='../../pictures/gol4.svg' className='gol-image'/>
      <div className='fal'>
            <img src={src} />
            <div className='fal-info'>
                <h3>{title}</h3>
                <div className='poem'>
                    <div id="randomPoem" dir='rtl'></div>
                </div> 
                    <button className='btn' onClick={event =>  window.location.href='/random'} >رفرش</button>
            </div>
            
        </div>
        <img src='../../pictures/tarh4.svg' />
  </div>;
}

export default Random;
