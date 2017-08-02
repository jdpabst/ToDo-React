
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home.js';
import New from './components/New/New.js';
// import Previous from './components/Home/Previous/Previous.js';


export default (
    <Switch>
        
        <Route component={ Home } path='/' exact />
        <Route component={ New } path='/create' />
        {/* <Route component={ Previous } path='/previous' /> */}

    </Switch>
)
