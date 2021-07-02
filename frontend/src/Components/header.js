import React from 'react'; 
import pic from '../ability_img.png';
import logopic from './img/park.png'


import '../App.css';



const Header = () =>{

  return (
    <section className="banner_part">
      <div className="logo">
      <img className="log"  src={logopic} alt="logo" />
      </div>
      <div className="container-h">
            <div className="banner_text">
              <div className="banner_text_iner">
                <h5>We are here to help you</h5>
                <h1>Try our<br/> Parkinson's test<br/> now</h1>
                <a href="#test" className="btn_2">Try out the software</a>
              </div>
            </div>

      </div>

      <div className="side">
          <img className="logo-pic"  src={pic} alt="logo" />
         </div>
    </section>

  );
};

export default Header;

