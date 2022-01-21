import React, {useState, useEffect} from 'react';

// const IMG_API = "https://ganjgah.ir/api/ganjoor/poem/10/images"
const Poet_API = "https://ganjgah.ir/api/ganjoor/poet/"



function Shaer({id, name}) {
    
    
    
  const [imgUrl, setImgUrl] = useState([]) 
  const [src, setSrc] = useState([]) 

  useEffect(() => {
    fetch(Poet_API+id)
    .then((res) => res.json())
    .then ((data) => {
      console.log(data);
      setImgUrl();
      setSrc("https://ganjgah.ir" + data.poet.imageUrl);
      // console.log(data.poet)
      // document.getElementById("poetImage").src = imgUrl;
    
    })
  }, [])

  return <div className='shaer'>
    <div className='poet-image'>
      <img src= {src} alt={name}/>
    </div>
    <div className='poet-name'>
      <h4>{name}</h4>
    </div>
  </div>;
}

export default Shaer;
