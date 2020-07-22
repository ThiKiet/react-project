import React from 'react';
import '../cartItem/index.css';
import {Image, Row, Col} from 'react-bootstrap';

const CartItem = ({name, price, quantity}) => {
  return (
    <Row>
      <Col><Image className = "cartImage"/></Col>
      <Col className = "prod-description">{name}</Col>
      <Col className = "prod-description">{price}</Col>
      <Col className = "prod-description">{quantity}</Col>
      <Col className = "prod-description">X</Col>
    </Row>
  );
}
export default CartItem;
