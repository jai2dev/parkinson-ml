import React from 'react'; 
import top from "./img/top_service.png"

const Prediction = () =>{

    return (
<section className="about">
<div class="about">

            <div class="about_us_img">
              <img src={top} alt="" />
            </div>
            <div class="about_us_text ">
              <h2>About the Disease</h2>
              <p>
              Parkinson's disease is a progressive nervous system disorder that affects movement. 
              Symptoms start gradually, sometimes starting with a barely noticeable tremor in just one hand. 
              Tremors are common, but the disorder also commonly causes stiffness or slowing of movement.

                In the early stages of Parkinson's disease, your face may show little or no expression. 
                Your arms may not swing when you walk. Your speech may become soft or slurred. 
                Parkinson's disease symptoms worsen as your condition progresses over time.

                Although Parkinson's disease can't be cured, medications might significantly improve your symptoms. 
                Occasionally, your doctor may suggest surgery to regulate certain regions of your brain and improve your symptoms.
              </p>
              <a class="btn_2 " href="https://www.mayoclinic.org/diseases-conditions/parkinsons-disease/symptoms-causes/syc-20376055">learn more</a>
            </div>
      </div>
        </section>
    );
  };
  
  export default Prediction;
  // export default Example;
  