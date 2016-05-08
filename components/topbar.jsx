var React = require('react');
var TextField = require('./textfield');
var Autosuggest = require('react-autosuggest');
var Button = require('./button');

import theme from '../styles/autocomplete.css';

var TopBar = React.createClass({

  getInitialState: function() {
    return {
      value: '',
      suggestions: this.getSuggestions(''),
      address: '',
    };
  },

  propTypes: {
    searchSuggestions: React.PropTypes.array,
    placeChanged: React.PropTypes.func,
  },

  getDefaultProps: function() {
    return {
      searchSuggestions: [],
    };
  },

  componentWillReceiveProps: function (newProps) {
    if (newProps.searchSuggestions.length > 0) {
      this.setState({
        suggestions: newProps.searchSuggestions,
      });
    }
  },

  onChange: function(event, { newValue }) {
    this.setState({
      value: newValue
    });
  },

  getSuggestions: function(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    var maxFilterCount = 5;
    return inputLength === 0 ? [] : this.props.searchSuggestions.filter(function(suggestion) {
      if (suggestion.toLowerCase().slice(0, inputLength) === inputValue) {
        maxFilterCount--;
        if (maxFilterCount > 0) {
          return true;
        }
      }

      return false;
    });
  },

  getSuggestionValue: function(suggestion) { // when suggestion selected, this function tells
    return suggestion;                       // what should be the value of the input
  },

  renderSuggestion: function(suggestion) {
    return (
      <span>{suggestion}</span>
    );
  },

  onSuggestionsUpdateRequested: function({ value }) {
    var suggestions = this.getSuggestions(value);
    this.setState({
      suggestions: suggestions
    });
  },

  placeChanged(address, latitude, longitude) {
    $('input[name=location]').text(address);

    this.setState({
      address: address,
      latitude: latitude,
      longitude: longitude
    });
  },

  searchClicked() {
    var link;
    var searchText = encodeURI(this.state.value);
    if (this.state.latitude && this.state.longitude) {
      link = './search?text=' + searchText + '?lat=' + this.state.latitude + '&lng=' + this.state.longitude;
    } else {
      link = './search?text=' + searchText;
    }

    console.log(link);

    window.location.href = link;
  },

  render: function() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Search',
      value,
      onChange: this.onChange
    };

    var autoSuggestStyle = {
      backgroundImage: 'url(../images/search.png)',
      backgroundSize: '12px 14px',
      backgroundPosition: '10px center',
      backgroundRepeat: 'no-repeat',
    };

    return (
      <div className="topbar">
        <div className="header-content">
          <a href="/"><h1 className="name">DocWho</h1></a>
            <div className="text-field-container">
              <div className="auto-suggest" style={autoSuggestStyle}>
                <Autosuggest suggestions={suggestions}
                             onSuggestionsUpdateRequested={this.onSuggestionsUpdateRequested}
                             getSuggestionValue={this.getSuggestionValue}
                             renderSuggestion={this.renderSuggestion}
                             inputProps={inputProps}/>
              </div>
              <TextField className="themed-text-field"
                              name="location"
                       placeholder="Location"
                googleAutoComplete="true"
                      placeChanged={this.placeChanged}
                       icon_url="../images/location.png"/>
            </div>
          <Button className="themed-button-topbar"
                    onClick={this.searchClicked}
                       text="Search"/>
        </div>
        <div className="separator"/>
      </div>
    );
  }
});

module.exports = TopBar;
