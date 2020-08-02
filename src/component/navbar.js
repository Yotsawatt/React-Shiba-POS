import React from 'react'
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Mainpos from '../layout/mainpos'
import Allproduct from '../layout/product'
import Allreport from '../layout/report'

const Home = () => (
    <div>
      <Mainpos/>
    </div>
);
const Product = () => (
    <div>
      <Allproduct/>
    </div>
);
const Report = () => (
    <div>
      <Allreport/>
    </div>
);

export default function Navbar() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/product">Product</Link>
                    </li>
                    <li>
                        <Link to="/report">Report</Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route path="/product">
                    <Product />
                </Route>
                <Route path="/report">
                    <Report />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}
