import React from 'react';
import reduce from 'lodash/reduce';
import Transactions from '../../containers/Transactions';
import CONFIG from '../../../env.json';

function Income(props) {
  const {
    accessToken,
    children,
  } = props;

  const calculateIncome = (transactions) => {
    const payrollTransactions = transactions.filter(
      (trans) => trans.category.includes('Payroll')
    );

    return reduce(payrollTransactions, (sum, trans) => (
      sum += (trans.amount * -1)
    ), 0);
  };

  return (
    <Transactions
      accountId={CONFIG.BOA_CHECKING_ID}
      accessToken={accessToken}
    >
      {
        ({ transactions, loading }) => {
          if (loading) {
            return <h1>Loading...</h1>
          }

          return children({
            income: calculateIncome(transactions),
          });
        }
      }
    </Transactions>
  );
}

export default Income;
