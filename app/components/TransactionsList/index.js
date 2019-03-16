import React from 'react';
import PropTypes from 'prop-types';
import dateFns from 'date-fns';
import ShadowContainer from '../ShadowContainer';
import Loader from '../Loader';
import Transaction from '../Transaction';
import CONFIG from '../../../env.json';

function TransactionsList(props) {
  const { transactions } = props;

  const sortedTransactions = transactions.sort((a, b) => (
    dateFns.compareDesc(new Date(a.date), new Date(b.date))
  ));

  return (
    <ShadowContainer>
      {
        sortedTransactions.map((trans, idx) => (
          <Transaction
            key={idx}
            transaction={trans}
          />
        ))
      }
    </ShadowContainer>
  );
};

TransactionsList.propTypes = {
  accessToken: PropTypes.string,
};

export default TransactionsList;
