import React from 'react';
import store from 'store2';
import CONFIG from '../../../env.json';
import { linkHandler, getAccessToken } from '../../util/plaidUtil';

class PlaidLinkButton extends React.Component {
  onSuccess = async (publicToken, metadata) => {
    const { refetchAccessTokens } = this.props;

    const requestedAccessToken = await getAccessToken({
      publicToken,
      institutionName: metadata.institution,name,
    });

    refetchAccessTokens();
  }

  render() {
    return (
      <div>
        <button
          onClick={() => linkHandler(this.onSuccess).open()}
        >
          Plain Link
        </button>
      </div>
    );
  }
}

export default PlaidLinkButton;
