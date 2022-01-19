import React from 'react'


const Fal= ({title, plainText, htmlText}) => (
    <div className='container'>
        <div className='fal'>
            <div className='fal-info'>
                <h3>{title}</h3>
                    <div id="poemContainer"></div>
                <div className='fal-tabir'>
                    <p><b>:ای صاحب فال </b></p>
                    <p>به زودی خبرهای خوشی دریافت خواهی کرد. هر کجا داخل شعر می و ساقی و مطرب و بوس و کنار و آغوش و... بود، منظور قرب وجودی به درگاه حق تعالی است! حرف هم نباشه جناب حافظ می‌فرمایند نماز اول وقت هم فراموش نشود</p>
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
