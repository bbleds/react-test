var React = require('react');
var GreeterMessage = require('./GreeterMessage');
var GreeterForm = require('./GreeterForm');


// use react library -- take options opject
// define behavior for our component
// add and define methods
var Greeter = React.createClass({
  // set default props for this compoenent
  getDefaultProps: function(){
    return {
      name : 'friend',
      message: 'Default message'
    }
  },
  getInitialState: function(){
    return {
      name: this.props.name,
      message: this.props.message
    }
  },
  // function to pass into children
  handleNewName: function(data){
    var updateData = {};

    // only set the fields that have values
    for(var field in data){
      var value = data[field];

      // only update if we actually have a value
      if(value){
        updateData[field] = value;
      }
    }

    this.setState(updateData);
  },
  // render is the only method required for success
  // exprects some jsx code that we want to render to dom
  render: function(){
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage parentName={name} parentMessage={message}/>
        <GreeterForm onNewName={this.handleNewName}/>
      </div>
    );
  }
});

module.exports = Greeter;
