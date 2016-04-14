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

	var React = __webpack_require__(1);
	var TopBar = __webpack_require__(2);

	React.render(React.createElement(TopBar, null), document.getElementById('content'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var TextField = __webpack_require__(3);
	var Button = __webpack_require__(4);

	var TopBar = React.createClass({
	  displayName: 'TopBar',

	  render: function () {
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
	          'div',
	          { className: 'text-field-container' },
	          React.createElement(TextField, { className: 'themed-text-field',
	            placeholder: 'Search',
	            icon_url: '../images/search.png' }),
	          React.createElement(TextField, { className: 'themed-text-field',
	            placeholder: 'Location' })
	        ),
	        React.createElement(Button, null)
	      ),
	      React.createElement('div', { className: 'separator' })
	    );
	  }
	});

	module.exports = TopBar;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);

	var TextField = React.createClass({
	  displayName: 'TextField',

	  propTypes: {
	    placeholder: React.PropTypes.string,
	    icon_url: React.PropTypes.string
	  },

	  render: function () {
	    if (this.props.icon_url) {
	      var style = {
	        backgroundImage: 'url(' + this.props.icon_url + ')',
	        backgroundSize: '12px 14px',
	        backgroundPosition: '10px center',
	        backgroundRepeat: 'no-repeat'
	      };

	      return React.createElement('input', { className: 'themed-text-field',
	        style: style,
	        placeholder: this.props.placeholder });
	    }

	    return React.createElement('input', { className: 'themed-text-field',
	      placeholder: this.props.placeholder });
	  }
	});

	module.exports = TextField;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);

	var Button = React.createClass({
	  displayName: "Button",

	  render: function () {
	    return React.createElement(
	      "button",
	      { className: "docwho-button" },
	      "Search"
	    );
	  }
	});

	module.exports = Button;

/***/ }
/******/ ]);