import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 96px;
  padding: 0 24px;
`;

const AppLayout = (props) => (
  <Container>
    { props.children }
  </Container>
);

export default AppLayout;
