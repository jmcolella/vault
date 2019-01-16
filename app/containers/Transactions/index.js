import React, { useState, useEffect } from 'react';
import { getTransactionsByAccount } from '../../util/plaidUtil';

function Transactions(props) {
  const {
    accessToken,
    accountId,
    children,
  } = props;

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (transactions.length === 0) {
      getTransactionsByAccount(accessToken, accountId)
        .then((requestedTransactions) => {
          setTransactions(requestedTransactions);
        });
    }
  }, [transactions]);

  return (
    children({
      transactions,
      loading: transactions.length === 0,
    })
  );
}

export default Transactions;
