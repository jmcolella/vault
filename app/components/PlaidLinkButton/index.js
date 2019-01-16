import React from 'react';
import store from 'store2';
import CONFIG from '../../../env.json';

class PlaidLinkButton extends React.Component {
  get handler() {
    return window.Plaid.create({
      clientName: 'Vault',
      env: 'development',
      key: CONFIG['PUBLIC_KEY'],
      product: ['transactions, auth'],
      onSuccess: function(public_token, metadata) {
        store.set('boaPublicToken', publicToken);
      },
    });
  }

  render() {
    return (
      <div>
        <button
          onClick={() => this.handler.open()}
        >
          Plain Link
        </button>
      </div>
    );
  }
}

export default PlaidLinkButton;
