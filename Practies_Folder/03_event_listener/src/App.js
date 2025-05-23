import React, { Component } from 'react'; // Correct import statement

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Hello World!' };
    //this.handler = this.handler.bind(this);
  }

  // handler() {
  //     this.setState({ name: 'Hello World' });
  // };

  handler= () =>{
      this.setState({ name: 'Hello World' });
  };

  render() {
      return (
          <div>
              <h1> hello:{this.state.name}</h1>
              <button onClick={this.handler}>Click Me</button>
          </div>
      );
  }
}

export default App;
