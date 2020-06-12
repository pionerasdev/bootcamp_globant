import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';

class App extends React.Component {

  state = {
    fishes: {}
  }

  addFishToState = fish => {
    // 1. Take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // 2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to state
    this.setState({ fishes });
  };

  loadSampleFishesToState = fishes => {
    this.setState({ fishes: fishes });
  }

  render() {
    const { fishes } = this.state;

    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Mercado de pescado fresco!" />
          <ul>
            {Object.keys(fishes).map(key =>
              <Fish details={fishes[key]} key={key} />
            )}
          </ul>
        </div>
        <Inventory
          addFishToState={this.addFishToState}
          loadSampleFishesToState={this.loadSampleFishesToState}
        />
        <Order fishes={fishes} />
      </div>
    );
  }
}

export default App;