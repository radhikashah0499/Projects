import React from 'react';
import  Div from '../styledComponents';
import '../index.css'; 
import ImageCard from './ImageCard';
import img1 from '../assets/images/masala.png' ;
import img2 from '../assets/images/ginger.jpeg';
import img3 from '../assets/images/irani.jpeg';
import img4 from '../assets/images/black.jpeg';
import img5 from '../assets/images/green.jpeg';
import img6 from '../assets/images/lemon.jpeg';


const Menu = () =>{
    return (
    <div className="page">
    <section className="menu" id="menu"> 
        <div className="title">
            <h2 className="titleText"><span> M</span>enu</h2>
            <p >We provide you all kinds of tea</p>
        </div>
        <div className="content">
          <ImageCard name="Masala Chai" source = {img1}/>
          <ImageCard name="Ginger Tea"  source= {img2}/>
          <ImageCard name="Irani Chai" source = {img3}/>
          <ImageCard name ="Black Tea" source = {img4}/>
          <ImageCard name ="Green Tea" source = {img5}/>
         <ImageCard name ="Lemon Tea" source = {img6}/> 

        </div>
        
    </section>
    </div>
)
};
export default Menu;