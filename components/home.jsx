var React = require('react');
var TopBar = require('./topbar');
var Banner = require('./banner');
var SpecialityGrid = require('./speciality-grid');

var Home = React.createClass({
  getInitialState: function() {
    return {
      specialities: [],
      searchSuggestions: [],
      showingOverlay: false,
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

  showGetStarted: function() {
    console.log('Show get started');
    this.setState({
      showingOverlay: true
    });
  },

  render: function() {
    var overlay = this.state.showingOverlay ? <div className="get-started-overlay"/> : null;
    return (
      <div className="container-view">
        <TopBar searchSuggestions={this.state.searchSuggestions}/>
        <Banner image_url="../images/banner.png"
                showGetStarted={this.showGetStarted}/>
        <h3 className="section-header">Find Doctors by Speciality</h3>
        <SpecialityGrid specialities={this.state.specialities}/>
        {overlay}
      </div>
    );
  }
});

module.exports = Home;
