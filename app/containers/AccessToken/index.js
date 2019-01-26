import React, { useState, useEffect } from 'react';
import store from 'store2';
import { getAccessToken, linkHandler } from '../../util/plaidUtil';

function AccessToken(props) {
  const {
    publicTokenName,
    children,
  } = props;

  const [publicToken, setPublicToken] = useState(store.get(publicTokenName));
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    if (!accessToken) {
      requestAccessToken();
    }
  }, [accessToken]);

  const requestAccessToken = async () => {
    const requestedAccessToken = await getAccessToken(publicToken);

    if (!requestedAccessToken) {
      linkHandler(onLinkHandlerSuccess).open();
      return;
    }

    setAccessToken(requestedAccessToken);
  }

  const onLinkHandlerSuccess = (public_token, metadata) => {
    console.log('metadata', metadata);

    store.set(publicTokenName, public_token);

    setPublicToken(public_token);
  }

  if (!accessToken) {
    return (
      <h1>Loading...</h1>
    );
  }

  return (
    children({
      accessToken,
    })
  );
}

export default AccessToken;
