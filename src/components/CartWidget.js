import React from 'react';

const CartWidget = () => {
  const cartItemCount = 5; // Este número será actualizado

  return (
    <div className="cart-widget">
      <i className="bi bi-cart4"></i>
      <span className="cart-item-count">{cartItemCount}</span>
    </div>
  );
}

export default CartWidget;
