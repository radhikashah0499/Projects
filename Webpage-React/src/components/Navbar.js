import React from 'react';
import {Link }from 'react-router-dom';
import '../index.css';



const Navbar = () =>{
   
    return (
       <header>
        <a href= "#" class="logo" >Tea House<span>!</span></a>
        <ul className="navigation">
                <li><Link to='/' >  Home </Link> </li>    
            <li> <Link to ='/menu' > Menu</Link></li> 
            <li> <Link to ='/about' >About Us</Link></li> 
            <li> <Link to='/contact' > Contact Us</Link> </li> 
            
       </ul>
       
       </header>
    
       
    )
};
export default Navbar;