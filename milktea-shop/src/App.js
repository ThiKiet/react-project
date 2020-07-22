import React, {Component} from 'react';
import ServiceItem from './components/serviceItem/index';
import CartItem from './components/cartItem/index';

class App extends Component {
  render() {
    return (
      <div>
        <ServiceItem/>
        <CartItem />
      </div>
    );
  }
}
export default App;