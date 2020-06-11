import React from 'react';
import { getFunName } from "../helpers";

class Picker extends React.Component {
  myInput = React.createRef();

  goToStore = event => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. get the text from that input
    const storeName = this.myInput.current.value;
    // 3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Por favor ingrese una tienda</h2>
        <input
          type="text"
          required
          placeholder="Nombre de la tienda"
          defaultValue={getFunName()}
          ref={this.myInput}
        />
        <button type="submit">Go! <span role="img">👉</span></button>
      </form>
    );
  }
}

export default Picker;