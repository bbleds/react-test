var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter');
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
