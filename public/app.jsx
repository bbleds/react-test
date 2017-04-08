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

var examplePassingInProps = 'Ben';
var exampleMessage = 'This is from a prop';

// kickoff react app
ReactDOM.render(
  // pass jsx
  <Greeter name={examplePassingInProps} message={exampleMessage}/>,
  // pass dom node
  document.getElementById('app')
);
