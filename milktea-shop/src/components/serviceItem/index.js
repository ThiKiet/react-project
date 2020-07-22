import React from 'react';
import '../serviceItem/index.css';
import {Image} from 'react-bootstrap';

const ServiceItem = ({title, description}) => {
  return(
    <div className="serviceItem">
      <p><Image/></p>
      <p className="service-title">{title}</p>
      <p className="service-description">{description}</p>
    </div>
  );
}

export default ServiceItem;