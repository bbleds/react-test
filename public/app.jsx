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
  handleNewName: function(name){
    console.log('inside of the handle new name method, preparring to set state to: ', name);
    // WE ARE READY TO SET OUR STATE
    this.setState({
      name: name
    });
  },
  // render is the only method required for success
  // exprects some jsx code that we want to render to dom
  render: function(){
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage parentName={name}/>
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
          <p>Some paragraph tag</p>
        </div>
      )
  }
});

var GreeterForm = React.createClass({
  onFormSubmit : function(e){
    e.preventDefault();
    console.log('should now be stopping');
    var name = this.refs.name.value;

    if(!name){
      return false;
    }

    this.refs.name.value = '';
console.log('here ', name);
    // pass name to parent
    this.props.onNewName(name);
  }
  ,
  render: function(){
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type='text' ref="name" placeholder="Please enter your name in this greeter message"/>
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
