import React, { Component } from 'react'
import { HashRouter as Router, Route,Switch } from 'react-router-dom'
import App from './App';
import Admin from './admin.js';
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import Loading from './pages/ui/loading';
import NoMatch from './pages/nomatch';
import Notice from './pages/ui/notice';
import Message from './pages/ui/messages';
import Tab from './pages/ui/tabs';
import Gallery from './pages/ui/gallery';
import Carousel from './pages/ui/carouse';
import Login from './pages/form/login';
import Register from './pages/form/register';
export default class IRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <App>
            <Route path='/login' component={Login}></Route>
            <Route path='/admin' render={() =>
              <Admin>
                <Switch>
                  <Route path='/admin/ui/buttons' component={Buttons}></Route>
                  <Route path='/admin/ui/modals' component={Modals}></Route>
                  <Route path='/admin/ui/loadings' component={Loading}></Route>
                  <Route path='/admin/ui/notification' component={Notice}></Route>
                  <Route path='/admin/ui/messages' component={Message}></Route>
                  <Route path='/admin/ui/tabs' component={Tab}></Route>
                  <Route path='/admin/ui/gallery' component={Gallery}></Route>
                  <Route path='/admin/ui/carousel' component={Carousel}></Route>
                  <Route path='/admin/form/login' component={Login}></Route>
                  <Route path='/admin/form/reg' component={Register}></Route>
                  <Route component={NoMatch}></Route>
                </Switch>
              </Admin>
            }></Route>
          </App>
        </div>
      </Router>
    )
  }
}

