import React, { Component } from 'react';
//import  '../StyledComponents';
// import Header from '../StyledComponents/Header';
// import Input from '../StyledComponents/Input';
//import Button from '../StyledComponents/Button';
import '../index.js'
import styled from "styled-components";



const Div = styled.div`
   margin-top : 10px;
  `


const Header = styled.header`
   color : blue;
   font-size: 50px;
   border-radius: 7%;
   border-color: blueviolet;
   text-align : center;
   background-color :rgb(157, 172, 72);

`

const Input0 = styled.input`
    margin-top : 60px;
    text-align : center;
    margin-left : 200px;
    
   
  
`
const Input1 = styled.input`
    margin-top : 60px;
    text-align : center;
    margin-left : 250px;
  
  
`
const Button = styled.button`
    
    text-align : center;
    justify-content: center;
    margin-left: 35%;
`

const Login = ()=>{

    return (
        
        <Div>
        <div>
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
         </div>
            
        </Div>
        
    )
};
export default Login;