import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, addAllProducts, clearAllProducts } from '../redux/actions';

function Badge({ list, products }) {
  const dispatch = useDispatch();

  return (
    <div className="badge">
      {list.map((item) => (
        <span key={item.title}>
          {item.title}
          <span
            className="close"
            onClick={() => dispatch(removeItem(item.title))}>
            X
          </span>
        </span>
      ))}
      {list.length === 0 && (
        <>
          <span
            onClick={() => dispatch(addAllProducts(products))}
            className="clear-all">
            Select All
          </span>
        </>
      )}

      {list.length > 0 && (
        <span
          onClick={() => dispatch(clearAllProducts())}
          className="clear-all">
          Clear Selection
        </span>
      )}
    </div>
  );
}

export default Badge;
