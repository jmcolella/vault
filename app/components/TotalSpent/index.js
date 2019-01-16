import React from 'react';
import reduce from 'lodash/reduce';
import accounting from 'accounting';

function TotalSpent(props) {
  const {
    transactions,
    income,
  } = props;

  const totalSpent = reduce(transactions, (sum, transaction) => (
    sum += transaction.amount
  ), 0);

  const RENT = 1130;

  return (
    <div>
      <h1>Income to date: </h1>
      <p>{ income }</p>

      <h1>Total Spent: </h1>
      <p>{ accounting.format(totalSpent) }</p>

      <h1>Amount left</h1>
      <p>{ accounting.format(income - totalSpent - RENT) }</p>
    </div>
  );
}

export default TotalSpent;
