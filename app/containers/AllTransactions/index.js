import React from 'react';
import Transactions from '../Transactions';
import CONFIG from '../../../env.json';

// Need to get cap one accound ID
function AllTransactions(props) {
  const {
    boaAccessToken,
    capOneAccessToken,
  } = props;

  return (
      <Transactions
        accountId={CONFIG.BOA_CASH_REWARDS_ID}
        accessToken={boaAccessToken}
      >
        {
          (rewardsProps) => (
            <Transactions
              accountId={CONFIG.CAP_ONE_VENTURE_ID}
              accessToken={capOneAccessToken}
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
