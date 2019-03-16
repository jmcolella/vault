import React from 'react';
import { hot } from 'react-hot-loader';
import AllTransactions from '../AllTransactions';
import AccessTokens from '../AccessTokens';
import TotalSpent from '../../components/TotalSpent';
import Income from '../../components/Income';
import Header from '../../components/Header';
import AppLayout from '../../components/AppLayout';
import ShadowContainer from '../../components/ShadowContainer';
import TransactionsList from '../../components/TransactionsList';
import PlaidLinkButton from '../../components/PlaidLinkButton';
import Loader from '../../components/Loader';
import CONFIG from '../../../env.json';

function App() {
  return (
    <div>
      <Header />

      <AppLayout>
        <AccessTokens>
          {
            (accessTokenData) => {
              if (accessTokenData.accessTokens.length === 0) {
                return (
                  <div>
                    <div>Please connect an account...</div>

                    <PlaidLinkButton
                      {...accessTokenData}
                    />
                  </div>
                );
              }

              return (
                <PlaidLinkButton
                  {...accessTokenData}
                />
              );
            }
          }
        </AccessTokens>
      </AppLayout>
    </div>
  );

  // return (
    // <div>
      // <Header />

      // <AppLayout>
        // <AccessToken
          // publicTokenName="boaPublicToken"
          // accessTokenName="boaAccessToken"
        // >
          // {
            // (boaAccessToken) => (
              // <AccessToken
                // publicTokenName="capOnePublicToken"
                // accessTokenName="capOneAccessToken"
              // >
                // {
                  // (capOneAccessToken) => (
                    // <Income accessToken={boaAccessToken.accessToken}>
                      // {
                        // ({ income }) => (
                          // <AllTransactions
                            // boaAccessToken={boaAccessToken.accessToken}
                            // capOneAccessToken={capOneAccessToken.accessToken}
                          // >
                            // {
                              // (transactions) => {
                                // if (transactions.loading) {
                                  // return (
                                    // <Loader />
                                  // );
                                // }

                                // return (
                                  // <div>
                                    // <div>
                                      // <TotalSpent
                                        // transactions={[...transactions.boaTransactions, ...transactions.capOneTransactions]}
                                        // income={income}
                                      // />

                                      // <TransactionsList
                                        // transactions={[...transactions.boaTransactions, ...transactions.capOneTransactions]}
                                      // />
                                    // </div>
                                  // </div>
                                // )
                              // }
                            // }
                          // </AllTransactions>
                        // )
                      // }
                    // </Income>
                  // )
                // }
              // </AccessToken>
            // )
          // }
        // </AccessToken>
      // </AppLayout>
    // </div>
  // );
}

export default hot(module)(App);
