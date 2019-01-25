import React from 'react';
import { hot } from 'react-hot-loader';
import AllTransactions from '../AllTransactions';
import AccessToken from '../AccessToken';
import TotalSpent from '../../components/TotalSpent';
import Income from '../../components/Income';
import Header from '../../components/Header';
import AppLayout from '../../components/AppLayout';
import ShadowContainer from '../../components/ShadowContainer';
import Loader from '../../components/Loader';
import CONFIG from '../../../env.json';

// There should be a top level container that handles loading all Transactions
// And passes them to the correct TransactionsList
function App() {
  return (
    <div>
      <Header />

      <AppLayout>
        <AccessToken
          publicTokenName="boaPublicToken"
        >
          {
            (boaAccessToken) => (
              <AccessToken
                publicTokenName="capOnePublicToken"
              >
                {
                  (capOneAccessToken) => (
                    <Income accessToken={boaAccessToken.accessToken}>
                      {
                        ({ income }) => (
                          <AllTransactions
                            boaAccessToken={boaAccessToken.accessToken}
                            capOneAccessToken={capOneAccessToken.accessToken}
                          >
                            {
                              (transactions) => {
                                if (transactions.loading) {
                                  return (
                                    <Loader />
                                  );
                                }

                                return (
                                  <div>
                                    <div>
                                      <TotalSpent
                                        transactions={[...transactions.boaTransactions, ...transactions.capOneTransactions]}
                                        income={income}
                                      />
                                    </div>


                                    <h2 style={{ color: 'red' }}>Rewards</h2>
                                    {
                                      transactions.boaTransactions.map((trans, idx) => (
                                        <div key={idx}>
                                          <h1>{trans.name}</h1>
                                          <p>{trans.amount}</p>
                                        </div>
                                      ))
                                    }

                                    <h2 style={{ color: 'blue' }}>Venture</h2>
                                    {
                                      transactions.capOneTransactions.map((trans, idx) => (
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
                          </AllTransactions>
                        )
                      }
                    </Income>
                  )
                }
              </AccessToken>
            )
          }
        </AccessToken>
      </AppLayout>
    </div>
  );
}

export default hot(module)(App);
