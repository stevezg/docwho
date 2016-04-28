var React = require('react');
var TopBar = require('./topbar');
var Banner = require('./banner');
var MapView = require('./mapview');

var Search = React.createClass({
  getInitialState: function() {
    return {
      specialities: [],
    };
  },

  componentDidMount: function() {
    this.serverRequest = $.get('http://docwho-api-dev.us-west-1.elasticbeanstalk.com/specialities', function (result) {
      // console.log(result);
      var specialities = result.map(function(speciality) {
        return speciality['short_name'];
      });

      this.setState({
        specialities: specialities,
      });

    }.bind(this));
  },

  render: function() {
    return (
      <div className="container-view">
        <TopBar/>
        <MapView/>
      </div>
    );
  }
});

module.exports = Search;
