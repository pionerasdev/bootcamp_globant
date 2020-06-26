import React from 'react';
import PropTypes from 'prop-types';
import FishForm from './FishForm';
import EditFishForm from './EditFishForm';

class Inventory extends React.Component {
  static propTypes = {
    addFishToState: PropTypes.func.isRequired,
    loadSampleFishesToState: PropTypes.func.isRequired,
    fishes: PropTypes.object.isRequired,
    updateFish: PropTypes.func.isRequired,
    deleteFish: PropTypes.func.isRequired,
  }
  render() {
    return (
      <div className="inventory">
        <h1>Inventory!</h1>
        <h2>Lista de platos</h2>
        {Object.keys(this.props.fishes).map((key) => {
          return <EditFishForm deleteFish={this.props.deleteFish} updateFish={this.props.updateFish} key={key} index={key} fish={this.props.fishes[key]}/>
        })}
        <h2>Crear nuevo plato!</h2>
        <FishForm
          addFishToState={this.props.addFishToState}
          loadSampleFishesToState={this.props.loadSampleFishesToState}
        />
      </div>
    );
  }
}

export default Inventory;