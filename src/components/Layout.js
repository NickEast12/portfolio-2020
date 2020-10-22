import React from 'react';
import styled from 'styled-components';
import 'normalize.css';

import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Nav from './Nav';
import Footer from './Footer';

const BodyStyles = styled.div`
  width: 100%;
  height: 100%;
`;

const Layout = ({ children }) => {
  console.log('stay please');
  return (
    <>
      <GlobalStyles />
      <Typography />
      <BodyStyles>
        <Nav />
        {children}
        <Footer />
      </BodyStyles>
    </>
  );
};

export default Layout;
