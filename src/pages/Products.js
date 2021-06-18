import React from 'react';
import ComplexTitle from '../components/ComplexTitle';
import Product from '../components/Product';

const products = [
  { id: 1, name: 'chair', price: 30 },
  { id: 2, name: 'bed',   price: 150 },
  { id: 3, name: 'couch', price: 550 },
];

const ProductsExample = (props) => {
  return (
    <>
      <section>
        <ComplexTitle title='all products' />
        {products.map((product) => {
           return <Product {...product} key={product.id}/>
        })}
      </section>
    </>
  );
};

export default ProductsExample;
