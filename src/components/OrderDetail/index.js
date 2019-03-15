import React, {Component} from 'react';
import './styles.css';

class OrderDetail extends Component {

  render() {
    console.log(this.props)
    const {orderData, onClickBack} = this.prors;
    return (
      <div>
        <h2>{orderData.name}</h2>
        <button onClick={() => onClickBack(orderData.name)}>Back</button>
      </div>
    )
  }
}

export default OrderDetail;