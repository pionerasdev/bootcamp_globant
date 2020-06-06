import React from 'react';

class Picker extends React.Component {
    render() {
        return (
            <form className="store-selector">
                <h2>Por favor ingrese una tienda</h2>
                <input type="text" required placeholder="Nombre de la tienda" />
                <button type="submit">Go! 👉</button>
            </form>
        );
    }
}

export default Picker;