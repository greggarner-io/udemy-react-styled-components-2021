import { useState } from 'react';
import styled from 'styled-components';

import { Controls } from './components/Controls';
import BasicExample from './pages/BasicExample';
import MoreComplexExample from './pages/MoreComplexExample';
import CardExample from './pages/CardExample';
import AnimationExample from './pages/AnimationExample';
import AsExample from './pages/AsExample';
import FormExample from './pages/FormExample';
import ListExample from './pages/ListExample';
import ProductsExample from './pages/Products';

const App = () => {
  const [showBasic, setShowBasic] = useState(false);
  const [showMoreComplex, setShowMoreComplex] = useState(false);
  const [showCardExample, setShowCardExample] = useState(false);
  const [showAnimationExample, setShowAnimationExample] = useState(false);
  const [showAsExample, setShowAsExample] = useState(false);
  const [showFormExample, setShowFormExample] = useState(false);
  const [showListExample, setShowListExample] = useState(false);
  const [showProductsExample, setShowProductsExample] = useState(true);
  
  const handleShowBasic = () => {
    return setShowBasic(!showBasic);
  };
  const handleShowMoreComplex = () => {
    return setShowMoreComplex(!showMoreComplex);
  };
  const handleShowCardExample = () => {
    return setShowCardExample(!showCardExample);
  };
  const handleShowAnimationExample = () => {
    return setShowAnimationExample(!showAnimationExample);
  };
  const handleShowAsExample = () => {
    return setShowAsExample(!showAsExample);
  };
  const handleShowFormExample = () => {
    return setShowFormExample(!showFormExample);
  };
  const handleShowListExample = () => {
    return setShowListExample(!showListExample);
  };
  const handleShowProductsExample = () => {
    return setShowProductsExample(!showProductsExample);
  };

  const Container = styled.div`
    padding: 2rem;
    background: var(--backgroundGray);
  `;

  return (
    <>
      <Container>
        <Controls
          showBasic={showBasic}
          showMoreComplex={showMoreComplex}
          showCardExample={showCardExample}
          showAnimationExample={showAnimationExample}
          showAsExample={showAsExample}
          showFormExample={showFormExample}
          showListExample={showListExample}
          showProductsExample={showProductsExample}

          handleShowBasic={handleShowBasic}
          handleShowMoreComplex={handleShowMoreComplex}
          handleShowCardExample={handleShowCardExample}
          handleShowAnimationExample={handleShowAnimationExample}
          handleShowAsExample={handleShowAsExample}
          handleShowFormExample={handleShowFormExample}
          handleShowListExample={handleShowListExample}
          handleShowProductsExample={handleShowProductsExample}
        />

        {showBasic && <BasicExample />}
        {showMoreComplex && <MoreComplexExample />}
        {showCardExample && <CardExample />}
        {showAnimationExample && <AnimationExample />}
        {showAsExample && <AsExample />}
        {showFormExample && <FormExample />}
        {showListExample && <ListExample />}
        {showProductsExample && <ProductsExample />}
      </Container>
    </>
  );
};

export default App;
