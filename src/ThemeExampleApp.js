import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './global-styles';

import { Controls } from './components/Controls';
import BasicExample from './pages/BasicExample';
import MoreComplexExample from './pages/MoreComplexExample';
import CardExample from './pages/CardExample';

const BaseTheme = {
  color: '#222',
  background: '#fff',
};
const DarkTheme = {
  color: '#fff',
  background: '#222',
};

const App = () => {
  const [showDarkTheme, setShowDarkTheme] = useState(false);
  const [showBasic, setShowBasic] = useState(false);
  const [showMoreComplex, setShowMoreComplex] = useState(false);
  const [showCardExample, setShowCardExample] = useState(true);

  const handleShowDarkTheme = () => {
    return setShowDarkTheme(!showDarkTheme);
  };
  const handleShowBasic = () => {
    return setShowBasic(!showBasic);
  };
  const handleShowMoreComplex = () => {
    return setShowMoreComplex(!showMoreComplex);
  };
  const handleShowCardExample = () => {
    return setShowCardExample(!showCardExample);
  };

  const ThemeContainer = styled.div`
    padding   : 2rem;
    color     : ${(props) => props.theme.color};
    background: ${(props) => props.theme.background};
  `

  return (
    <>
      <ThemeProvider theme={showDarkTheme ? DarkTheme : BaseTheme}>
        <GlobalStyles />
        <ThemeContainer>
          <Controls
            showDarkTheme         = {showDarkTheme}
            showBasic             = {showBasic}
            showMoreComplex       = {showMoreComplex}
            showCardExample       = {showCardExample}
            handleShowDarkTheme   = {handleShowDarkTheme}
            handleShowBasic       = {handleShowBasic}
            handleShowMoreComplex = {handleShowMoreComplex}
            handleShowCardExample = {handleShowCardExample}
          />

          {showBasic && <BasicExample />}
          {showMoreComplex && <MoreComplexExample />}
          {showCardExample && <CardExample />}
        </ThemeContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
