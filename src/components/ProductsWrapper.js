import React, { useState, useTransition } from 'react';
import { generateProducts } from '../data';
import ProductList from './ProductList';

const dummyProducts = generateProducts();

function filterProducts(filterTerm) {
  if (!filterTerm) {
    return dummyProducts;
  }
  return dummyProducts.filter((product) => product.includes(filterTerm));
}

const ProductsWrapper = () => {
    const [filterTerm, setFilterTerm] = useState('');
    const filteredProducts = filterProducts(filterTerm);
    const [shuffled, setShuffled] = useState(false); 
    const [isFilterPending, startFilterTransition] = useTransition();
    const [isShufflePending, startShuffleTransition] = useTransition();
  
    function updateFilterHandler(event) {
      startFilterTransition(() => {
        setFilterTerm(event.target.value);
      })
    }
  
    function shuffleLayout() {
      startShuffleTransition(() => {
        setShuffled(!shuffled);
      })
    }
    return (
        <div>
            <div className='row'>
                <input className='row__left' type="text" placeholder="Input Product" onChange={updateFilterHandler} />
                <input className='row__right' type='button' value={shuffled ? "Reset" : "Shuffle"} onClick={() => shuffleLayout()}/>
            </div>
            <br/>
            <br/>
            {isFilterPending || isShufflePending ? <>Loading ...</> : <ProductList products={filteredProducts} shuffled={shuffled}/>}
            {/* <ProductList products={filteredProducts} shuffled={shuffled}/> */}
      </div>
    );
};

export default ProductsWrapper;