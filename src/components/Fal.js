import React from 'react'


const Fal= ({title, plainText, htmlText}) => (
    <div className='container'>
        <div className='fal'>
            <div className='fal-info'>
                <h3>{title}</h3>
                <div>{plainText}</div>
                <div className='fal-tabir'>
                    ای صاحب فال به زودی خبر خوشی دریافت خواهی کرد. فقط جناب حافظ می‌فرمایند نماز اول وقت فراموش نشود :D
                </div>
            </div>
        </div>
    </div>
    
)

export default Fal
