var React = require('react');
var TopBar = require('./topbar');
var Banner = require('./banner');
var GoogleMap = require('./googlemap');
var ResultsGrid = require('./results-grid');
var Router = require('react-router').Router;

const leftStyle = {
  width: '75%',
  display: 'inline-block'
};
const rightStyle = {
  width: '25%',
  display: 'inline-block'
};

var Search = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function() {
    return {
      doctors: [],
    };
  },

  componentDidMount: function() {
    var params = this.props.location.query;
    if (params.speciality_id) { //if speciality_id is set
      console.log("special id " + params.speciality_id);
      this.serverRequest = $.get('http://docwho-api-dev.us-west-1.elasticbeanstalk.com/doctors?speciality_id='
      + params.speciality_id, function (result) {
        console.log(result);
        // var doctors = result.map(function(result.doctors) {
        //   var doctor
        //   return speciality['short_name'];
        // });
        //
        this.setState({
          doctors: result.doctors,
        });

      }.bind(this));
    }
    // console.log(this.props.location.query);
    // this.serverRequest = $.get('http://docwho-api-dev.us-west-1.elasticbeanstalk.com/specialities', function (result) {
    //   // console.log(result);
    //   var specialities = result.map(function(speciality) {
    //     return speciality['short_name'];
    //   });

      // this.setState({
      //   doctors: [{'name': 'Peppy'}],
      // });

    // }.bind(this));
  },

  render: function() {
    return (
      <div className="container-view">
        <TopBar/>
        <div className="grid">
          <GoogleMap mlat="55.0000" mlong="-113.0000"/>
          <ResultsGrid doctors={this.state.doctors}/>
        </div>
      </div>
    );
  }
});

module.exports = Search;
