import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      generation: 0,
    };
  }
  
  render() {
    return (
      <div>
        <h1>Game of life</h1>
        <Grid
          
        />
        <h2>Generation: {this.state.generation}</h2>
      </div>
    )
  }
}

ReactDOM.render(<Main/>, document.getElementById('root'));