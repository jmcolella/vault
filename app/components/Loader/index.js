import React from 'react';
import styled, { keyframes } from 'styled-components';
import { GREY } from '../../constants/colors';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  animation: ${rotate} .5s linear infinite;
  border-bottom: 2px solid ${GREY};
  border-left: 2px solid ${GREY};
  border-right:  2px solid transparent;
  border-top: 2px solid transparent;
  border-radius: 50%;
  height: 36px;
  width: 36px;
`;

const Loader = () => <Container />;

export default Loader;
