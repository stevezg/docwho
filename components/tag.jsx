var React = require('react');
var Link = require('react-router').Link;

var Tag = React.createClass({
  propTypes: {
    text: React.PropTypes.string,
    speciality: React.PropTypes.string,
  },

  render: function() {
    var link = encodeURI('/search?text=' + this.props.speciality + ' ' + this.props.text);

    return (
      <div className="tag-container">
        <Link className="tag" to={link}>{this.props.text}</Link>
      </div>
    );
  }
});

module.exports = Tag;
