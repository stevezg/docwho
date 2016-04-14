/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Home = __webpack_require__(2);

	React.render(React.createElement(Home, null), document.getElementById('content'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var TopBar = __webpack_require__(3);
	var Banner = __webpack_require__(6);
	var SpecialityGrid = __webpack_require__(7);

	var Home = React.createClass({
	  displayName: 'Home',

	  getInitialState: function getInitialState() {
	    return {
	      specialities: []
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    this.serverRequest = $.get('http://docwho-api-dev.us-west-1.elasticbeanstalk.com/specialities', function (result) {
	      console.log(result);
	      var specialities = result.map(function (speciality) {
	        return speciality['short_name'];
	      });

	      this.setState({
	        specialities: specialities
	      });
	    }.bind(this));
	  },

	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'container-view' },
	      React.createElement(TopBar, null),
	      React.createElement(Banner, { image_url: '../images/banner.png' }),
	      React.createElement(
	        'h3',
	        { className: 'section-header' },
	        'Find Doctors by Speciality'
	      ),
	      React.createElement(SpecialityGrid, { specialities: this.state.specialities })
	    );
	  }
	});

	module.exports = Home;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var TextField = __webpack_require__(4);
	var Button = __webpack_require__(5);

	var TopBar = React.createClass({
	  displayName: 'TopBar',

	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'topbar' },
	      React.createElement(
	        'div',
	        { className: 'header-content' },
	        React.createElement(
	          'h1',
	          { className: 'name' },
	          'DocWho'
	        ),
	        React.createElement(
	          'form',
	          { action: '', method: 'post', enctype: 'multipart/form-data' },
	          React.createElement(
	            'div',
	            { className: 'text-field-container' },
	            React.createElement(TextField, { className: 'themed-text-field',
	              name: 'search',
	              placeholder: 'Search',
	              icon_url: '../images/search.png' }),
	            React.createElement(TextField, { className: 'themed-text-field',
	              name: 'location',
	              placeholder: 'Location' })
	          ),
	          React.createElement(Button, { className: 'themed-button-topbar',
	            text: 'Search' })
	        )
	      ),
	      React.createElement('div', { className: 'separator' })
	    );
	  }
	});

	module.exports = TopBar;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var TextField = React.createClass({
	  displayName: 'TextField',

	  propTypes: {
	    name: React.PropTypes.string,
	    placeholder: React.PropTypes.string,
	    icon_url: React.PropTypes.string
	  },

	  render: function render() {
	    if (this.props.icon_url) {
	      var style = {
	        backgroundImage: 'url(' + this.props.icon_url + ')',
	        backgroundSize: '12px 14px',
	        backgroundPosition: '10px center',
	        backgroundRepeat: 'no-repeat'
	      };

	      return React.createElement('input', { className: 'themed-text-field',
	        style: style,
	        name: this.props.name,
	        placeholder: this.props.placeholder });
	    }

	    return React.createElement('input', { className: 'themed-text-field',
	      name: this.props.name,
	      placeholder: this.props.placeholder });
	  }
	});

	module.exports = TextField;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);

	var Button = React.createClass({
	  displayName: "Button",

	  propTypes: {
	    text: React.PropTypes.string,
	    className: React.PropTypes.string
	  },

	  render: function render() {
	    var className = "themed-button " + this.props.className;
	    return React.createElement(
	      "button",
	      { className: className },
	      this.props.text
	    );
	  }
	});

	module.exports = Button;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Button = __webpack_require__(5);

	var Banner = React.createClass({
	  displayName: 'Banner',

	  propTypes: {
	    image_url: React.PropTypes.string
	  },

	  render: function render() {
	    var style = {
	      backgroundImage: 'url(' + this.props.image_url + ')'
	    };

	    return React.createElement(
	      'div',
	      { className: 'banner',
	        style: style },
	      React.createElement(
	        'div',
	        { className: 'banner-content' },
	        React.createElement(
	          'h2',
	          { className: 'tagline' },
	          'Find Better Doctors'
	        ),
	        React.createElement(
	          'form',
	          { action: '', method: 'post', enctype: 'multipart/form-data' },
	          React.createElement(Button, { className: 'themed-button-banner',
	            text: 'Get Started' })
	        )
	      )
	    );
	  }
	});

	module.exports = Banner;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var SpecialityTile = __webpack_require__(8);

	var SpecialityGrid = React.createClass({
	  displayName: 'SpecialityGrid',

	  propTypes: {
	    specialities: React.PropTypes.array
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      specialities: []
	    };
	  },

	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'grid' },
	      this.props.specialities.map(function (speciality) {
	        return React.createElement(SpecialityTile, { name: speciality });
	      })
	    );
	  }
	});

	module.exports = SpecialityGrid;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var SpecialityTile = __webpack_require__(8);

	var SpecialityTile = React.createClass({
	  displayName: 'SpecialityTile',

	  propTypes: {
	    name: React.PropTypes.string
	  },

	  render: function render() {
	    var image_path = this.props.name.replace(/\s/g, "-").toLowerCase();
	    var style = {
	      backgroundImage: 'url(' + '../images/specialities/' + image_path + '.png)'
	    };

	    var link = "./specialities/" + image_path;

	    return React.createElement(
	      'a',
	      { href: link },
	      React.createElement(
	        'div',
	        { className: 'speciality-tile',
	          style: style },
	        React.createElement(
	          'h2',
	          { className: 'speciality-name-title' },
	          this.props.name
	        )
	      )
	    );
	  }
	});

	module.exports = SpecialityTile;

/***/ }
/******/ ]);