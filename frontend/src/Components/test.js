import React, {useEffect,useState} from 'react'; 
import docpic from './img/service.png'

class Test extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
          FileURL: '',
          result:''
        };
    
        this.handleUploadFile = this.handleUploadFile.bind(this);
      }
    
      handleUploadFile(ev) {
        ev.preventDefault();
        
        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
    
        fetch('https://parkinson-backend.herokuapp.com/predict', {
          method: 'POST',
          body: data,
        }).then(res => {
            
          res.json().then(body => {
            
            console.log(body);
            this.setState({result:body.prediction})
            
          });
        });
      }


      
     render(){
        
        const {result}=this.state;
        
        return (

        <section id="test" className="test">
            <h2 className="test-h">Our service</h2>
        <div className="container-t">
          <div className="test">
                <h2 >Check Whether you have<br/> Parkinson's Disease or not</h2>
          </div>
          <div class="row justify-content-between align-items-center">
             
              <div id="drop-area">
                <form onSubmit={this.handleUploadFile} className='my-form' encType="multipart/form-data">  
                <p>Upload Your audio in .wav format here</p>
                <br/>
                <input ref={(ref)=> {this.uploadInput=ref;}} className="select" type="file" name="file" id="fileElem" />  
                
                <button className="button" >Upload</button>
                </form>  
              </div>
          </div>
        </div>
        <div className="doctor">
        <img className="doc-pic"  src={docpic} alt="doc" />
        </div>
        <div className="result">
            <br/>
            <br/>
            <br/>
            <br/>
            <h1 id="prediction">{result}</h1>
            
            <p>Probability of Patient having Parkinson's Diesease <br/> (wait for few seconds while the result loads)</p>
        </div>

        <div className="how">
        <h1 className="cal">How the result is calculated?</h1>
        <br/>

        <p className="data"> After you submit your voice file. The system then runs some algorithms to extract important information from the audio file.
             Further the information is send to the extensively tested machine learning model and then model predicts the probability of user having parkinson's disease</p>
        </div>
        </section>


    );
  }
}
  
  export default Test;
  // export default Example;
  