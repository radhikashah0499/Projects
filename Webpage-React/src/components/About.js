import React from 'react';
import Carousel from './Carousel';
import '../index.css';
const About = () =>{
    return (
        <div className ="page">
        <section class="about" id="about">
        <div class="row">
            <div class="col50">
                <h2 class="titleText"><span>A</span>bout Us</h2>
                <p>
                    Here we provide you the comfort and taste of your home. <br></br>
                    We have been providing the service since 2015 . We hope you enjoy our service .
                </p>
            </div>
            <div className="col50" >
                <div className="imgBx">
                    <Carousel />
                </div>

            </div>
    
     </div>

    </section>
        </div>
    )
}

export default About;