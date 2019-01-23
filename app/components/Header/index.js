import React from 'react';
import styled from 'styled-components';
import { GREEN, WHITE } from '../../constants/colors';
import { MAIN_FONT } from '../../constants/fonts';

const Wrapper = styled.div`
  align-items: center;
  background-color: ${WHITE};
  border-bottom: 1px solid ${GREEN};
  display: flex;
  height: 60px;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const Title = styled.h1`
  color: ${GREEN};
  font-size: 24px;
  font-family: ${MAIN_FONT};
`;

const Header = () => (
  <Wrapper>
    <Title>vault</Title>
  </Wrapper>
);

export default Header;
