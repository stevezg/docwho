var React = require('react');
var Button = require('./button');
var Link = require('react-router').Link;

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

    var link = encodeURI('/search/Primary Care?address=University of Southern California Los Angeles, CA, United States?lat=38.199911?lng=-85.765912');

    return (
      <div className="banner"
        style={style}>
        <div className="banner-content">
          <h2 className="tagline">Find Better Doctors</h2>
          <Link to={link}>
            <Button className="themed-button-banner"
                    text="Get Started"/>
          </Link>
        </div>
      </div>
    );
  }
});

module.exports = Banner;
