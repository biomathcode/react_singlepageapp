import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './Home';
import Works from './Works';
import About from './About';

const Content =() => {
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/works' component={About}/>
            <Route exact path='/about' component={Works}/>
        </Switch>
    )
}

export default Content