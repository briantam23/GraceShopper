import React, {Component} from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Nav from './Nav'
import Auth from './Auth.js'
import Shop from './Shop.js'
import Cart from './Cart.js'
import Order from './Order.js'


class App extends Component {

    render(){
        return(
            <Router>
                <div>
                <Nav/>
                <Route render={ ({ history }) => <Auth history={ history }/>}/>
                <Route exact path = '/' component = {() => <Shop/>}/>
                <Route path = '/user/:id/cart' component = {() => <Cart/>}/>
                <Route path = '/user/:id/order' component = {() => <Order/>}/>
                </div>
            </Router>
        )
    }
}

export default App