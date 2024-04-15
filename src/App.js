// App.js
import React from 'react';
import WeatherApp from './Components/weatherApp';
import './App.css';

function App() {
  return (
    
     <React.Fragment>
     <div className="container">
       <WeatherApp />
     </div>
     <div className="footer-info">
       <a href="">
         Download Source Code
       </a>{" "}
       | Developed by{" "}
       <a target="_blank" href="https://www.linkedin.com/in/aniket-baghel-aa3390215">
         Aniket Baghel
       </a>
      
     </div>
   </React.Fragment>
  );
}

export default App;
