import React, { Component } from 'react'; 


import Header from './Components/header';
import Test from './Components/test';
import Prediction from './Components/prediction';
import Footer from './Components/footer';


 

import './App.css';


class App extends Component {

  

 
  render() { 
    return (
      
    <div className='App'>
          
      
      <Header/>
      <Test/>
      <Prediction/>
      <Footer/>

      
    </div>

  );
  }
}

export default App;
// export default Example;
