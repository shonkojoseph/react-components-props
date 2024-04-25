import React from 'react';
import Product from './Product'; 

// Parent component
function ProductList() {
  return (
    <div>
      <h1>Products</h1>
      {/* Render multiple Product components with different props */}
      <Product name="iPhone" price={999} />
    </div>
  );
}

export default ProductList;
