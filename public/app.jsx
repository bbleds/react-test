// use react library -- take options opject
// define behavior for our component
// add and define methods
var Greeter = React.createClass({
  // render is the only method required for success
  // exprects some jsx code that we want to render to dom
  render: function(){
    return (
      <div>
        <h1>my first react component</h1>
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
