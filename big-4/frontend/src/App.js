
import Nav from './components/Nav'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Tasks from './components/Tasks';
import TodoForm from './components/TodoForm';
import './App.css';
const  App = ()=> {
  return (
    <BrowserRouter>
   
    <div className="App">
      
        <Nav/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/tasks' exact component={Tasks}/>
          <Route path='/todolist' exact component = {TodoForm}/>
        </Switch>
      
     
    </div>
    </BrowserRouter>
  );
}

export default App;
 