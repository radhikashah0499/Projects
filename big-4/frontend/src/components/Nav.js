import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
const Nav = ()=>{
    return (
        <div  className="nav">
            
            <Link to= '/' className="links">Home</Link> 
             <Link to='/tasks' className="links">Tasks</Link>
             <Link to='/todolist' className="links">Todo List</Link>
        </div>
    )
}

export default Nav;