import React from 'react';

function ProductList({ products, shuffled }) {
  return (
    <ul className={shuffled ? "shuffled" : ""}>
      {products.map((product) => (
        <li key={product}>{product}</li>
      ))}
    </ul>
  );
}

export default ProductList;
