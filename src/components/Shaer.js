import React, {useState, useEffect} from 'react';

// const IMG_API = "https://ganjgah.ir/api/ganjoor/poem/10/images"
const Poet_API = "https://ganjgah.ir/api/ganjoor/poem/random"



function Shaer() {
    const [Poet, setPoet] = useState([]);

    useEffect(() => {
    fetch(Poet_API)
    .then((res) => res.json())
    .then ((data) => {
      console.log(data);
      // setFal(data);
      setPoet(data);
    })
  }, [])


  return <div>

  </div>;
}

export default Shaer;
