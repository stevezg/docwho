var React = require('react');
var Home = require('./home');
var Search = require('./search');
var ProfilePage = require('./profile-page/ProfilePage');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;
var RouteHandler = Router.RouteHandler;

React.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="search" component={Search}/>
    <Route path="doctor" component={ProfilePage}/>
  </Router>,
  document.getElementById('content')
);
