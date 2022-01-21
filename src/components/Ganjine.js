import React, {useState,useEffect} from 'react';
import Shaer from './Shaer';

function Ganjine() {
  
  const Poet_API = "https://ganjgah.ir/api/ganjoor/poets"


  const [poets] = useState([
    {
      name: "اوحدی مراغه‌ای",
      id: 19,
      img_src: ""
    },
    {
      name: "مولوی",
      id: 5
    },
    {
      name: "باباطاهر",
      id: 28
    },
    {
      name: "سعدی",
      id: 7
    },
    {
      name: "صائب",
      id: 22
    },
    {
      name: "ابوسعید ابوالخیر",
      id: 26
    },
    {
      name: "خیام",
      id: 3
    },
    {
      name: "حافظ",
      id: 2
    },
    {
      name: "رهی معیری",
      id: 41
    },
    {
      name: "هاتف اصفهانی",
      id: 25
    },
    {
      name: "عبید زاکانی",
      id: 33
    },
    {
      name: "سیف فرغانی",
      id: 31
    },
    {
      name: "امیرخسرو دهلوی",
      id: 34
    },
    {
      name: "محتشم کاشانی",
      id: 29
    },
    {
      name: "سلمان ساوجی",
      id: 40
    },
    {
      name: "فروغی بسطامی",
      id: 32
    },
    {
      name: "عراقی",
      id: 21
    },
    {
      name: "شهریار",
      id: 35
    },
    {
      name: "خواجو",
      id: 20
    }
    
  ])



  return <div className='ganjine-container'>
    <div className='ganijene-yellow'>

    </div>
    <div className='ganjine-blue'>
      
    </div>
    <div className='poet-container'>
      {poets.map(poets => (
          <Shaer id={poets.id} />
      ))}
    </div>
  </div>;
}

export default Ganjine;
