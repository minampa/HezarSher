import React from 'react'

const SRC = 'https://ganjgah.ir/api/audio/file/';
const mp3 = '.mp3'
const Fal= ({title, plainText, htmlText, recitations}) => (

    <div className='container'>
        <div className='fal'>
            <div className='fal-info'>
                <h3>{title}</h3>
                <div className='poem'>
                    <div id="poemContainer"></div>
                    <audio controls 
                        className='audio'
                        src= {SRC+ recitations + mp3}  
                    >
                    </audio>
                </div> 
                
                <div className='fal-tabir'>
                    <p><b>:ای صاحب فال </b></p>
                    <p>به زودی خبرهای خوشی دریافت خواهی کرد. هر کجا داخل شعر می و ساقی و مطرب و بوس و کنار و آغوش و... بود، منظور قرب وجودی به درگاه حق تعالی است! حرف هم نباشه. جناب حافظ می‌فرمایند نماز اول وقت هم فراموش نشود</p>
                </div>
                <div className='btn-fal'>
                    <button className='btn'>بازگشت به صفحه اصلی</button>
                    <button className='btn'>فال مجدد</button>
                </div>
                
            </div>
        </div>
    </div>
    
)

export default Fal
