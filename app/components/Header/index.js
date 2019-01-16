import React from 'react';
import styled from 'styled-components';
import { GREEN } from '../../constants/colors';

const Wrapper = styled.div`
  align-items: center;
  border-bottom: 1px solid ${GREEN};
  display: flex;
  height: 60px;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100%;
`;

const Title = styled.h1`
  color: ${GREEN};
  font-size: 24px;
`;

const Header = () => (
  <Wrapper>
    <Title>Vault</Title>
  </Wrapper>
);

export default Header;
