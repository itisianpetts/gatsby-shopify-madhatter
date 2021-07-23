import React, { useContext } from 'react';
import {
  Layout,
  HomepageCollectionsGrid,
  FeaturedProducts,
  SEO,
} from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = useContext(ProductContext);

  return (
    <Layout>
      <SEO title="Homepage" description="MadHatter Store Homepage" />
      <HomepageCollectionsGrid
        collections={
          collections.filter(
            collection => collection.title !== 'Featured hats'
          ) || []
        }
      />
      {!!collections.find(
        collection => collection.title === 'Featured hats'
      ) && <FeaturedProducts />}
    </Layout>
  );
};

export default IndexPage;
