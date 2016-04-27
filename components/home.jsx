var React = require('react');
var TopBar = require('./topbar');
var Banner = require('./banner');
var SpecialityGrid = require('./speciality-grid');

var Home = React.createClass({
  getInitialState: function() {
    return {
      specialities: [],
    };
  },

  componentDidMount: function() {
    this.serverRequest = $.get('http://docwho-api-dev.us-west-1.elasticbeanstalk.com/specialities', function (result) {
      // console.log(result);
      var specialities = result.map(function(speciality) {
        // console.log(speciality);
        var obj = {};
        obj.short_name = speciality['short_name'];
        obj.id = speciality['id'];
        return obj;

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
        <Banner image_url="../images/banner.png"/>
        <h3 className="section-header">Find Doctors by Speciality</h3>
        <SpecialityGrid specialities={this.state.specialities}/>
      </div>
    );
  }
});

module.exports = Home;
