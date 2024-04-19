// import React from 'react'

// import { Link } from 'react-router-dom' ;
// const btnText = "Sign up for Free";

// const title = "Shop Anytime, Anywhere";
// const desc ="Shop conveniently on any device with our app. Just download, install, and start exploring!";
// const AppSection = () => {
//   return (
//     <div className='app-section padding-tb'>
//         <div className='container'>
//             <div className='section-header text-center'>
//                 <Link to="/sign-up" className='lab-btn mb-4'>{btnText}</Link>
//                 <h2 className='title'>{title}</h2>
//                 <p>{desc}</p>
//             </div>

//             <div className='section-wrapper'>
//                 <ul className='lab-ul'>
//                     <li><a href="#"><img src="/public/images/app/01.jpg" alt="" /></a></li>
//                     <li><a href="#"><img src="/public/images/app/02.jpg" alt="" /></a></li>
//                 </ul>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default AppSection


import React from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../../public/images/01.jpg';
import Image2 from '../../public/images/02.jpg';

const btnText = "Sign up for Free";
const title = "Shop Anytime, Anywhere";
const desc = "Shop conveniently on any device with our app. Just download, install, and start exploring!";

const AppSection = () => {
  return (
    <div className='app-section padding-tb'>
      <div className='container'>
        <div className='section-header text-center'>
          <Link to="/sign-up" className='lab-btn mb-4'>{btnText}</Link>
          <h2 className='title'>{title}</h2>
          <p>{desc}</p>
        </div>

        <div className='section-wrapper'>
          <ul className='lab-ul'>
            <li><a href="#"><img src={Image1} alt="" /></a></li>
            <li><a href="#"><img src={Image2} alt="" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AppSection;
