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
  // render is the only method required for success
  // exprects some jsx code that we want to render to dom
  render: function(){
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}, welcome to react world</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var Asker = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'friend'
    }
  },
  // handle our inital states
  getInitialState: function(){
    return {
      name: this.props.name
    }
  },
  // custom function for us
  onButtonClick: function(e){
    e.preventDefault();
    // get name off of refs and get value
    var name = this.refs.name.value;

    // if empty, do nothing
    if(!name){
      return false;
    }

    this.refs.name.value = '';
    console.log('we are setting state');
    this.setState({name : name});
  },
  render : function(){
    var name = this.state.name;

    return (
      <div>
        <form onSubmit={this.onButtonClick}>
          <input type='text' ref="name" placeholder="Please enter your name"/>
          <button type='submit'>Set Name</button>
        </form>
        <h1>Hello, {name}</h1>
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
    <Asker />
  </div>,
  // pass dom node
  document.getElementById('app')
);
