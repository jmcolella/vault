import React from 'react';
import Transactions from '../Transactions';
import CONFIG from '../../../env.json';

function AllTransactions(props) {
  const {
    boaAccessToken,
    capOneAccessToken,
    children,
  } = props;

  return (
      <Transactions
        accountId={CONFIG.BOA_CASH_REWARDS_ID}
        accessToken={boaAccessToken}
        insId="BOA"
      >
        {
          (rewardsProps) => (
            <Transactions
              accountId={CONFIG.CAP_ONE_VENTURE_ID}
              accessToken={capOneAccessToken}
              insId="CAP_ONE"
            >
              {
                (ventureProps) => (
                  children({
                    loading: rewardsProps.loading || ventureProps.loading,
                    boaTransactions: rewardsProps.transactions,
                    capOneTransactions: ventureProps.transactions,
                  })
                )
              }
            </Transactions>
          )
        }
      </Transactions>
  );
}

export default AllTransactions;
