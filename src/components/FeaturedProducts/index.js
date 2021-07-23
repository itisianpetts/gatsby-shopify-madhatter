import React, { useContext } from 'react';
import ProductContext from 'context/ProductContext';
import { ProductsGrid } from '../ProductsGrid';

export function FeaturedProducts() {
  const { collections } = useContext(ProductContext);

  const featuredCollection = collections.find(
    collection => collection.title === 'Featured hats'
  );

  return (
    <section>
      <h1>Fetured hats</h1>
      <ProductsGrid products={featuredCollection.products} />
    </section>
  );
}
