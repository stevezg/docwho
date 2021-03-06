var React = require('react');
var FilterBar = require('./filter-bar');
var TopBar = require('./topbar');
var Banner = require('./banner');
var GoogleMap = require('./google-map');
var ResultsGrid = require('./results-grid');
var NoResults = require('./noresults');
var Router = require('react-router').Router;
var RouterContext = require('react-router').RouterContext;
var Mixpanel = require('mixpanel');

var mixpanel = Mixpanel.init('d2e3f1563c0f0f55b0a7e7f1026a937e');

const leftStyle = {
  width: '75%',
  display: 'inline-block'
};
const rightStyle = {
  width: '25%',
  display: 'inline-block'
};
const mapStyle =  { // initially any map object has left top corner at lat lng coordinates
  height: '600px',
  width: '70%',
  display: 'inline-block',
  float: 'left'
};
var currentSelectedFilters = {
  insurance: null,
  gender: null,
  rating: null
};

var insurances = [];

var Search = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function() {
    var query = this.props.location.query;

    var searchText = this.props.params.text;
    var address = query.address;
    var latitude = 34.0224;
    var longitude = -118.2851;
    var noResultsMessage = "We're sorry, but we couldn't find any doctors for you.</br>Try searching for something else.";

    if (address) { // if address is set
      console.log(address);
      if (address.indexOf("Los Angeles, CA") == -1) { // and if not in LA
      noResultsMessage = "We're sorry, but we couldn't find any doctors for you. </br>We currently only have doctors in Los Angeles, CA."
    }
    var index = address.indexOf('?lat=');
    if (index > -1) {
      var components = address.split('?lat=');
      address = decodeURI(components[0]);
      latitude = components[1];

      index = latitude.toString().indexOf('?lng=');
      if (index > -1) {
        components = latitude.toString().split('?lng=');
        latitude = components[0];
        longitude = components[1];
      } else {
        longitude = query.lng;
      }
    } else {
      latitude = query.lat;
      longitude = query.lng;
    }
  }

  return {
    doctors: [],
    searchText: searchText,
    address: address,
    latitude: latitude,
    longitude: longitude,
    noResultsMessage: noResultsMessage,
    loading: true,
    doctorSeleced: {}
  };
},

componentDidMount: function() {
  this.getDoctors();
  this.getInsurances();
  this.getSearchSuggestions();
},

getDoctors: function() {
  this.setState({loading: true});
  var trackingData = {};
  var params = {};
  params.latitude = this.state.latitude;
  params.longitude = this.state.longitude;
  if (currentSelectedFilters.insurance) {
    params.insurance_id = currentSelectedFilters.insurance;
    trackingData.insurance_id = currentSelectedFilters.insurance;
  }
  if (currentSelectedFilters.gender) {
    params.gender = currentSelectedFilters.gender;
    trackingData.gender = currentSelectedFilters.gender;
  }
  if (currentSelectedFilters.rating) {
    params.min_rating = currentSelectedFilters.rating;
    trackingData.min_rating = currentSelectedFilters.rating;
  }
  trackingData.searchText = this.state.searchText;
  mixpanel.track("Search", trackingData);
  this.serverRequest = $.post('http://docwho-api-dev.us-west-1.elasticbeanstalk.com/doctors/search/'
  + this.state.searchText, params).done(function (result) {
    console.log(result);
    this.setState({
      doctors: result.doctors,
      offset: 0, //sample offset for now
      results: result.num_results,
      totalCount: result.next_cursor,
      loading: false
    });

  }.bind(this));
},

getInsurances: function() {
  this.serverRequest = $.get('http://docwho-api-dev.us-west-1.elasticbeanstalk.com/insurances')
  .done(function (result) {
    // console.log(result);
    this.setState({
      insurances: result
    });

  }.bind(this));
},

getSearchSuggestions: function() {
  this.serverRequest = $.get('http://docwho-api-dev.us-west-1.elasticbeanstalk.com/searchSuggestions', function (result) {

    this.setState({
      searchSuggestions: result,
    });

  }.bind(this));
},

filterSelected: function(filtersSelected) {
  currentSelectedFilters = filtersSelected;

  this.getDoctors();
},

doctorSelected: function(doctor) {
  this.setState({
    latitude: doctor.practice.latitude,
    longitude: doctor.practice.longitude,
    doctorSelected: doctor
  });
},

render: function() {
  return (
    <div className="container-view">
      <TopBar searchSuggestions={this.state.searchSuggestions}
        initialSearchText={this.state.searchText}
        initialAddress={this.state.address}/>
      <FilterBar currentSelectedFilters={currentSelectedFilters} insurances={this.state.insurances} filterSelected={this.filterSelected} offset={this.state.offset} results={this.state.results} totalCount={this.state.totalCount}/>
      <div className={"grid" + (this.state.loading ? ' overlay' : '' )}>
        <NoResults message={this.state.noResultsMessage} className={(this.state.results == 0 ? '' : 'hidden')}/>
        <GoogleMap style={mapStyle} className={(this.state.results != 0 ? '' : 'hidden')} scrollable={false} latitude={this.state.latitude} longitude={this.state.longitude} doctorSelected={this.state.doctorSelected}/>
        <ResultsGrid className={(this.state.results != 0 ? '' : 'hidden')} doctors={this.state.doctors} doctorSelected={this.doctorSelected}/>
      </div>
    </div>
  );
}
});

module.exports = Search;
