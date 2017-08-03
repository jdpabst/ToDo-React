
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home.js';
import New from './components/New/New.js';



export default (
    <Switch>
        
        <Route component={ Home } path='/' exact />
        <Route component={ New } path='/new' />
        
    </Switch>
)
