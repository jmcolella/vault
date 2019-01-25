import React from 'react';
import PropTypes from 'prop-types';
import ShadowContainer from '../ShadowContainer';
import Loader from '../Loader';
import Transactions from '../../containers/Transactions';
import CONFIG from '../../../env.json';

// I think this will just take in a list of transactions per account
function TransactionsList(props) {
  const { accessToken } = props;

  return (
    <ShadowContainer>
      <Transactions
        accountId={CONFIG.BOA_CASH_REWARDS_ID}
        accessToken={accessToken}
      >
        {
          (rewardsProps) => {
            if (rewardsProps.loading) {
              return (
                <Loader />
              );
            }

            return (
              <div>
                <h2 style={{ color: 'blue' }}>Rewards</h2>
                {
                  rewardsProps.transactions.map((trans, idx) => (
                    <div key={idx}>
                      <h1>{trans.name}</h1>
                      <p>{trans.amount}</p>
                    </div>
                  ))
                }
              </div>
            )
          }
        }
      </Transactions>
    </ShadowContainer>
  );
};

TransactionsList.propTypes = {
  accessToken: PropTypes.string,
};

export default TransactionsList;
