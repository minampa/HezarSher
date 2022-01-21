import React from 'react';
import Nav from './Nav';

function Main() {
  return <div className='main-container'>
      <Nav />
      <div className='main'>
          <img src='../../pictures/mainPagePicture.svg' className='main-image'></img>
            <div className='main-text'>
                <p>
                    تاریخ کهن ایران‌زمین با پیشینه‌ای غنی از فرهنگ و هنر، از دیرباز با شعر و ادبیات در هم پیچیده و ایران، مهد پرورش شاعران بزرگی بوده و درگیر و دار فراز و نشیب‌هایی که در طول تاریخ بر آن گذشته، اما شاهنامه وزین و پارسی‌پرور فردوسی بزرگ، اشعار روح‌بخش مولانا و عشق‌بازی‌اش با حق، غزل‌های عاشقانه و عارفانه عالم‌گیر در دیوان حافظ،اندیشه ژرف و عرفان ناب عطار نیشابوری همه و همه همچون مرهمی بر زخم‌های کوچک و بزرگش تسکین داده‌اند.
                </p>
                <div>
                  <button className='btn-main'>فال حافظ</button>
                  <button className='btn-main'>گنجینه اشعار</button>
                </div>
            </div> 
            <div>
                <img src='../../pictures/tarh1.svg'></img>
            </div>      
      </div>
  </div>;
}

export default Main;
