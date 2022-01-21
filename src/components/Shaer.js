import React, {useState, useEffect} from 'react';

// const IMG_API = "https://ganjgah.ir/api/ganjoor/poem/10/images"
const Poet_API = "https://ganjgah.ir/api/ganjoor/poets"



function Shaer({id, name, imageUrl}) {
    
    
    

    

  return <div className='shaer'>
    <img src={imageUrl}></img>
    <h4>{name}</h4>
  </div>;
}

export default Shaer;
