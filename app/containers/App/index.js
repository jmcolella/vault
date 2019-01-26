import React from 'react';
import { hot } from 'react-hot-loader';
import AllTransactions from '../AllTransactions';
import AccessToken from '../AccessToken';
import TotalSpent from '../../components/TotalSpent';
import Income from '../../components/Income';
import Header from '../../components/Header';
import AppLayout from '../../components/AppLayout';
import ShadowContainer from '../../components/ShadowContainer';
import TransactionsList from '../../components/TransactionsList';
import Loader from '../../components/Loader';
import CONFIG from '../../../env.json';

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

                                      <TransactionsList
                                        transactions={[...transactions.boaTransactions, ...transactions.capOneTransactions]}
                                      />
                                    </div>
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
