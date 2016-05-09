var React = require('react');
var Button = require('./button');

var Banner = React.createClass({
  propTypes: {
    showGetStarted: React.PropTypes.func,
    image_url: React.PropTypes.string,
  },

  getStartedSelected: function() {
    this.props.showGetStarted();
  },

  render: function() {
    var style = {
      backgroundImage: 'url(' + this.props.image_url + ')',
    };

    return (
      <div className="banner"
        style={style}>
        <div className="banner-content">
          <h2 className="tagline">Find Better Doctors</h2>
          <Button className="themed-button-banner"
                  text="Get Started"
                  onClick={this.getStartedSelected}/>
        </div>
      </div>
    );
  }
});

module.exports = Banner;
