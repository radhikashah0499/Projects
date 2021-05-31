import React from 'react';

const SocialLogo = (props)=>{
    return (
        <div>
                <a href= {props.href} target="_blank">
                    <img src={props.src} class="logoimg" id="insta" />
                 </a>
        </div>
    )
};

export default SocialLogo;