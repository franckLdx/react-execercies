import React, { FunctionComponent, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const Home: FunctionComponent = () => {
  const history = useHistory();
  useEffect(() => {
    history.push("/posts");
  }, [history])
  return <></>;
}