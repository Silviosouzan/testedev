import React from 'react';
import './Card.css';

const Card = ({ title, description, onClick, children }) => {
  return (
    <div className="card" onClick={onClick}>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <div className="card-content">
        {children} {}
      </div>
    </div>
  );
};

export default Card;
