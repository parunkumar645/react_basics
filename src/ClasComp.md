import React, { Component } from 'react';

class MyComponent extends Component {
  // Initialize state in the constructor if needed
  constructor(props) {
    super(props);
    this.state = {
      // Define your initial state here
      exampleState: "Hello, world!"
    };
  }

  // Lifecycle method example (optional)
  componentDidMount() {
    // Code to run after the component has mounted
    console.log("Component mounted");
  }

  // Render method (required in class components)
  render() {
    return (
      <div>
        <h1>{this.state.exampleState}</h1>
        <button onClick={() => this.setState({ exampleState: "State updated!" })}>
          Update State
        </button>
      </div>
    );
  }
}

export default MyComponent;


Key points:
The class component extends React.Component (or { Component }).
The state is initialized in the constructor using this.state.
You must use this.setState() to update the state.
The render() method is mandatory and returns JSX.
You can use lifecycle methods like componentDidMount(), componentDidUpdate(), etc., in class components.