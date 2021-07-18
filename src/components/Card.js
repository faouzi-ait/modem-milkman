import React from 'react';

function Card({ item }) {
  const displayStockMessage = (stock) => {
    if (stock < 1) {
      return 'Out of stock';
    } else if (stock <= 10) {
      return 'Few Left';
    } else if (stock > 10) {
      return 'In Stock';
    }
  };

  return (
    <div className="card">
      <img src="milk.jpeg" alt="milk" width="175" />
      <span>{item.title}</span>
      <span>£{item.price} Box</span>
      <span>{displayStockMessage(item.stock)}</span>
    </div>
  );
}

export default Card;
