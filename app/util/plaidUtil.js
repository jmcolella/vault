import dateFns from 'date-fns';
import store from 'store2';
import CONFIG from '../../env.json';

export const linkHandler = (onSuccess) => (
  window.Plaid.create({
    clientName: 'Vault',
    env: 'development',
    key: CONFIG['PUBLIC_KEY'],
    product: ['transactions, auth'],
    onSuccess,
  })
)

export const getAccessToken = async (publicToken) => {
  const result = await fetch('http://localhost:3000/access_token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      publicToken,
    }),
  });

  return result.json().then((accessToken) => accessToken.access_token);
};

export const getTransactionsByAccount = async (accessToken, accountId) => {
  const today = new Date();

  const result = await fetch('http://localhost:3000/transactions_by_account', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      accessToken,
      accountId,
      startDate: dateFns.format(dateFns.startOfMonth(today),'YYYY-MM-DD'),
      endDate: dateFns.format(today, 'YYYY-MM-DD'),
    }),
  });


  return result.json().then((transactions) => transactions.transactions);
};
