import React from 'react';
import './header.css'




function Header(){
    return (
      <nav className="header">
        <div className="menu">
        <ul > 
          <li className="logo">Home</li>
          <li className="logo">Service</li>
          <li className="logo"><a href="https://react-spring.io/">Spring</a></li>
          <li className="logo"><a href="https://threejs.org/">three.js</a></li>
        </ul>
       </div>
        
      </nav>
    );
  }
  
export default Header;