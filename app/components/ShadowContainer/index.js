import React from 'react';
import styled from 'styled-components';
import { GREY } from '../../constants/colors';

const Container = styled.div`
  border-radius: 5px;
  box-shadow: 0px 0px 10px 1px ${GREY};
  margin: 0 auto;
  max-width: 1280px;
  padding: 24px;
  z-index: 0;
`;

const ShadowContainer = (props) => (
  <Container>
    { props.children }
  </Container>
);

export default ShadowContainer;
