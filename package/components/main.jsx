var React = require('react');
var App = require('./app');
var Home = require('./home');
var Search = require('./search');
var DoctorProfile = require('./doctor-profile');
var NotFound = require('./not-found');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;
var RouteHandler = Router.RouteHandler;

React.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="search" component={Search}/>
      <Route path="/doctors/:id" component={DoctorProfile}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>,
  document.getElementById('content')
);
