var React = require('react');
var Button = require('./button');

var Banner = React.createClass({
  propTypes: {
    image_url: React.PropTypes.string,
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
          <a href="/profilepage">
            <Button className="themed-button-banner"
                         text="Get Started"/>
                     </a>
        </div>
      </div>
    );
  }
});

module.exports = Banner;
