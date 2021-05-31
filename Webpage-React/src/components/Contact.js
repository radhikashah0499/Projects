import React from 'react';
import '../index.css';
import SocialLogo from './SocialLogo';
import img1 from '../assets/icons/insta.jpeg';
import img2 from '../assets/icons/face.jpeg';
import img3 from '../assets/icons/twiiter.jpeg';
import img4 from '../assets/images/contact.jpeg'
const Contact = () =>{
    return (
    <div className="page">  
        <section class="contact" id="contact">
        <div class="title">
            <h2 class="titleText"><span> C</span>ontact Us</h2>
            <p id="msg"> Please feel free to leave a message</p>
        </div>
        <div class="content" id="con">
            <div class="row">
                <div class="col50" >
                    <h2 class="titleText">Send Message</h2>
                    <p class="msgContent"> 
                       <span>Email</span> - teahouse@gmail.com
                       <br/>
                       <span>Call </span>- +91-78689798666
                       <br/><br/>
                       <span>Follow Us -</span>
                    </p>
                    <div class="logo">
                        <SocialLogo href="https://www.instagram.com/" src= {img1} />
                        <SocialLogo href="https://www.facebook.com/" src ={img2} />
                        <SocialLogo href="https://www.twitter.com/" src ={img3}/>
                        
                    </div>
                </div>
                <div class="col50">
                    <div class="imgBx" id="msg">
                        <img class="imageToDisplay" src= {img4} />
                    </div>
    
                </div>
        </div>
        </div>

    </section>
    </div>
    )
};

export default Contact;
