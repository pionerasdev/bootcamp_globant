import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';
import fishes from '../sample-fishes';

class App extends React.Component {

  state = {
    fishes: {},
    order: {}
  }

  componentDidMount() { 
    const localStorageOrder = JSON.parse(localStorage.getItem(this.props.match.params.storeId));
    if (localStorageOrder) { 
      this.setState({ order: localStorageOrder });
    }
  }

  componentDidUpdate() { 
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order))
  } 

  addFishToState = fish => {
    // 1. Take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // 2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to state
    this.setState({ fishes });
  };

  addToOrder = (fish) => { 
    const order = { ...this.state.order };
    if (order[fish]) {
      order[fish] = order[fish] + 1;
    } else { 
      order[fish] = 1;
    }
    // order[fish] = (order[fish]) ? order[fish] + 1 : 1;
    // order[fish] = order[fish] + 1 || 1;
    this.setState({ order });
  }

  loadSampleFishesToState = fishes => {
    this.setState({ fishes: fishes });
  }

  updateFish = (key, updatedFish) => { 
    // 1. Crear una copia del estado
    const fishesCopy = { ...this.state.fishes };
    // 2. Actualizar el pescado en la copia del estado
    fishesCopy[key] = updatedFish;
    // 3. Actualizamos el pescado a partir de la copia
    this.setState({ fishes: fishesCopy });

  }

  deleteFish = (key) => { 
    // 1. Crear una copia del estado
    const fishesCopy = { ...this.state.fishes };
    // 2. Actualizar el pescado en la copia del estado
    delete fishesCopy[key];
    // 3. Actualizamos el pescado a partir de la copia
    this.setState({ fishes: fishesCopy });
  }

  render() {
    const { fishes} = this.state;

    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Mercado de pescado fresco!" />
          <ul>
            {Object.keys(fishes).map(key =>
              <Fish
                details={fishes[key]}
                key={key}
                addToOrder={this.addToOrder}
                indicesito={key}
                />
            )}
          </ul>
        </div>
        <Inventory
          addFishToState={this.addFishToState}
          loadSampleFishesToState={this.loadSampleFishesToState}
          fishes={this.state.fishes}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
        />
        <Order fishes={fishes} order={this.state.order}/>
      </div>
    );
  }
}

export default App;