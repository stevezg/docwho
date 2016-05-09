var React = require('react');
var Select = require('react-select');

var options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
];

var StarterCard = React.createClass({
  propTypes: {
  },

  getDefaultProps: function() {
    return {
    };
  },

  componentDidUpdate: function(){
    if (this.props.index == this.props.activeInput){
        ReactDOM.findDOMNode(this.refs.input).focus();
    }
  },

  logChange: function(val) {
    console.log("Selected: " + val);
  },

  onFocus: function() {

  },

  render: function() {
    return (
      <div className="starter-card">
        <div className="get-started-overlay"/>
        <div className="starter-card-container">
          <h2 className="starter-card-header">Select Your Insurance</h2>
            <Select name="form-field-name"
                    value="one"
                    onFocus={this.onFocus}
                    options={options}
                    onChange={this.logChange}
            />
        </div>
      </div>
    );
  }
});

module.exports = StarterCard;
