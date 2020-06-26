import React from 'react';
import FishForm from './FishForm'

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h1>Inventory!</h1>
        <FishForm
          addFishToState={this.props.addFishToState}
          loadSampleFishesToState={this.props.loadSampleFishesToState}
        />
      </div>
    );
  }
}

export default Inventory;