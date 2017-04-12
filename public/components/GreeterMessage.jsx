var React = require('react');

var GreeterMessage = React.createClass({
  render: function(){
      return (
        <div>
          <h1>Hello, {this.props.parentName}</h1>
          <p>{this.props.parentMessage}</p>
        </div>
      )
  }
});

// export this module
module.exports = GreeterMessage;
