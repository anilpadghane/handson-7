import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './Home';
import Student from './Student';
import Contact from './Contact';
import Nav from './Nav';
import './Myapp.css';


const App =()=>{
    return(
        <>
        <Nav />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Student" component={Student}/>
            <Route  path="/contact" component={Contact}/>
        </Switch>
       
        </>
    )
}

export default App;