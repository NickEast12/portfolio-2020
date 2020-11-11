import React from 'react';
import styled from 'styled-components';
import 'normalize.css';

import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Nav from './Nav';
import Footer from './Footer';
import Cookie from './Cookie';

const BodyStyles = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    <BodyStyles>
      <Nav />
      {children}
      <Cookie />
      <Footer />
    </BodyStyles>
  </>
);

export default Layout;
