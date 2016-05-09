var React = require('react');

export class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

module.exports = App;
