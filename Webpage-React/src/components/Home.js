import React from 'react';
import  Div from '../styledComponents';
import '../index.css';

const Home = ()=>{
    
    return (
    <div className="page">
        <section class="banner" id="banner">
        <div class="content">
            <h2>
                ALways be Tea Positive
            </h2>
            <p> 
                Come,let's have some tea and continue to talk about happy things.
                
            </p>
            <a href = '/menu' class="btn"> Our Menu</a>
        </div> 

    </section>
   </div>
    
    )
};
export default Home;