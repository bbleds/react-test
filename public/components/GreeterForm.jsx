var React = require('react');

var GreeterForm = React.createClass({
  onFormSubmit : function(e){
    e.preventDefault();

    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if(!name && !message){
      return false;
    }

    this.refs.name.value = '';
    this.refs.message.value='';

    var data = {
      name : name,
      message: message
    }

    // pass name to parent
    this.props.onNewName(data);
  }
  ,
  render: function(){
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type='text' ref="name" placeholder="Please enter your name in this greeter message"/>
          <textarea ref='message'></textarea>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
});


module.exports = GreeterForm;
