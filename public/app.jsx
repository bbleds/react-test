// use react library -- take options opject
// define behavior for our component
// add and define methods
var Greeter = React.createClass({
  // set default props for this compoenent
  getDefaultProps: function(){
    return {
      name : 'friend'
    }
  },
  // render is the only method required for success
  // exprects some jsx code that we want to render to dom
  render: function(){
    var name = this.props.name;

    return (
      <div>
        <h1>Hello {name}, welcome to react world</h1>
        <p>Additional component stuffs</p>
      </div>
    );
  }
});

// kickoff react app
ReactDOM.render(
  // pass jsx
  <Greeter/>, 
  // pass dom node
  document.getElementById('app')
);
