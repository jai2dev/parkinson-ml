import React from 'react'; 
import final from './img/J.png'

const Footer = () =>{

    return (
        <section className="foot">
        <footer className="footer-area">
            <div>
                <div className="footer">
                    
                    <div className="row justify-content-between">
                        <div className="single-footer-widget">
                        <br/>
                            <h4>Connect with me</h4>    
                        <a className="khuchbhi" href="https://jai2dev.github.io/alpha/" >
                            <img class="final" src={final} alt="logo" />
                        </a>
                        </div>
                    </div>
                </div>
                
            </div>
                <br/>

            <div className="copyright_part">
                <div className="container-f">
                <div className="row align-items-center">
                    <p>
                    All rights reserved
                    <br/>
                    ©Copyright- JD | 2021 
                    </p>
                    
                </div>
            </div>
            </div>
            </footer>
            </section>
 
    );
  };
  
  export default Footer;
  // export default Example;
  