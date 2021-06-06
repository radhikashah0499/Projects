import React, { Component } from 'react';
import { Body,Header,Input0,Input1,Button} from '../Styled';
import '../index.js'


const Login = ()=>{

    return (
        
        <Body>
        
            <Header >
                Welcome to the login page
            </Header>
            <div>
                <Input0 type="text" placeholder="abc@gmail.com"/>
                     Email
                    
          

                <Input1 type="text" placeholder="********"/>
           
                     Password
                   
            </div>
           
            <div >
                <Button>
                    Submit
                </Button>
            </div>
      
            
        </Body>
        
    )
};
export default Login;