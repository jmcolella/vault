import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import dateFns from 'date-fns';
import accounting from 'accounting';
import { MAIN_FONT } from '../../constants/fonts';
import { INSTITUTIONS } from '../../constants/institutions';

const Container = styled.div`
  margin-bottom: 12px;
`;

const Row = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.p`
  font-family: ${MAIN_FONT};
  font-size: 18px;
`;

const Amount = styled.p`
  font-family: ${MAIN_FONT};
  font-size: 18px;
  font-weight: bold;
`;

const Transaction = (props) => {
  const { transaction } = props;

  return (
    <Container>
      <Row>
        <Title>{transaction.name}</Title>
        <Amount>{accounting.formatMoney(transaction.amount)}</Amount>
      </Row>
      <p>{dateFns.format(transaction.date, 'MMM D, YYYY')}</p>
      <p>{INSTITUTIONS[transaction.insId]}</p>
    </Container>
  );
}

export default Transaction;
