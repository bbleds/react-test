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
          <button type='submit'>Set Name</button>
        </form>
      </div>
    )
  }
});

var examplePassingInProps = 'Ben';
var exampleMessage = 'This is from a prop';

// kickoff react app
ReactDOM.render(
  // pass jsx
  <div>
    <Greeter name={examplePassingInProps} message={exampleMessage}/>
  </div>,
  // pass dom node
  document.getElementById('app')
);
