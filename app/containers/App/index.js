import React from 'react';
import Transactions from '../Transactions';
import AccessToken from '../AccessToken';
import TotalSpent from '../../components/TotalSpent';
import Income from '../../components/Income';
import CONFIG from '../../../env.json';

function App() {
  return (
    <div>
      <AccessToken
        publicTokenName="boaPublicToken"
      >
        {
          ({ accessToken }) => (
            <Income accessToken={accessToken}>
              {
                ({ income }) => (
                  <Transactions
                    accountId={CONFIG.BOA_CASH_REWARDS_ID}
                    accessToken={accessToken}
                  >
                    {
                      (rewardsProps) => {
                        if (rewardsProps.loading) {
                          return <h1>Loading...</h1>
                        }

                        return (
                          <div>

                            <TotalSpent
                              transactions={rewardsProps.transactions}
                              income={income}
                            />

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
                )
              }
            </Income>
          )
        }
      </AccessToken>
    </div>
  );
}

export default App;
