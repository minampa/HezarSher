import React, {useState, useEffect} from 'react';

// const IMG_API = "https://ganjgah.ir/api/ganjoor/poem/10/images"
const Poet_API = "https://ganjgah.ir/api/ganjoor/poet/"



function Shaer({id}) {
    
    
    
  const [imgUrl, setImgUrl] = useState([]) 
  const [src, setSrc] = useState([]) 
  const [name, setName] = useState([])

  useEffect(() => {
    fetch(Poet_API+id)
    .then((res) => res.json())
    .then ((data) => {
      console.log(data);
      setImgUrl();
      setSrc("https://ganjgah.ir" + data.poet.imageUrl);
      setName(data.poet.name);
      // console.log(data)
      // document.getElementById("poetImage").src = imgUrl;
    
    })
  }, [])

  return <div className='shaer'>
    <div>
      <img src= {src} alt={name}/>
      <h5>{name}</h5>
    </div>
  </div>;
}

export default Shaer;
