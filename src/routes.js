import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Shop from './Components/Shop/Shop';
import Product from './Components/Product/Product';
import Custom from './Components/Custom/Custom';
import About from './Components/About/About';

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/shop' component={Shop}/>
        <Route path='/product/:id' component={Product}/>
        <Route path='/custom' component={Custom}/>
        <Route path='/about' component={About}/>
    </Switch>
)