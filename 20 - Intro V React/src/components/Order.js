import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {

  renderOrder = (key) => { 
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    if (!fish) return null;
    const isAvailable = fish && fish.status === 'available';
    if (isAvailable) {
      return <li key={key}>
        {count} lbs {fish.name} <strong>{formatPrice(count * fish.price)} </strong>
      </li>
    } else { 
      return <li>
        Lo sentimos, {fish.name} no está disponible
      </li>
    }
  }

  render() {
    let total = 0;
    const order = this.props.order;
    const fishes = this.props.fishes;
    const orderIds = Object.keys(order);
    orderIds.forEach(key => {
      if (fishes[key]) { 
        total = total + fishes[key].price * order[key];
      }
      
    });

    return (
      <div className="order-wrap">
        <h2>Order!</h2>
        <ul className="order">
          {orderIds.map(this.renderOrder)}
        </ul>
        <div className="total">
          Total: 
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;