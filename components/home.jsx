var React = require('react');
var TopBar = require('./topbar');
var Banner = require('./banner');
var SpecialityGrid = require('./speciality-grid');
var Mixpanel = require('mixpanel');

var mixpanel = Mixpanel.init('d2e3f1563c0f0f55b0a7e7f1026a937e');
mixpanel.track("User Visit");

var Home = React.createClass({
  getInitialState: function() {
    return {
      specialities: [],
      searchSuggestions: [],
    };
  },

  componentDidMount: function() {
    var specialityRequest = $.get('http://docwho-api-dev.us-west-1.elasticbeanstalk.com/specialities', function (result) {
      var specialities = result.map(function(speciality) {
        var obj = {};
        obj.short_name = speciality['short_name'];
        obj.id = speciality['id'];
        return obj;
      });

      this.setState({
        specialities: specialities,
      });

    }.bind(this));

    var suggestionsRequest = $.get('http://docwho-api-dev.us-west-1.elasticbeanstalk.com/searchSuggestions', function (result) {

      this.setState({
        searchSuggestions: result,
      });

    }.bind(this));
  },

  render: function() {
    return (
      <div className="container-view">
        <TopBar searchSuggestions={this.state.searchSuggestions}/>
        <Banner image_url="../images/banner.png"/>
        <h3 className="section-header">Find Doctors by Speciality</h3>
        <SpecialityGrid specialities={this.state.specialities}/>
      </div>
    );
  }
});

module.exports = Home;
