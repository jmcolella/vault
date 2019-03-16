import React, { useState, useEffect } from 'react';
import { getAccessTokens } from '../../util/plaidUtil';

function AccessTokens(props) {
  const {
    children
  } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [accessTokens, setAccessTokens] = useState([]);

  useEffect(() => {
    if (isLoading) {
      fetchAccessTokens().then((fetchedAccessTokens) => {
        setIsLoading(false);
        setAccessTokens(fetchedAccessTokens);
      });
    }
  }, [accessTokens]);

  const fetchAccessTokens = async () =>
    await getAccessTokens();

  if (isLoading) {
    return (
      <div>Loading Access Tokens</div>
    );
  }

  console.log('accessTokens', accessTokens);

  return (
    children({
      isLoading,
      accessTokens,
      refetchAccessTokens: fetchAccessTokens,
    })
  );
};

export default AccessTokens;
