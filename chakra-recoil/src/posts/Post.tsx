import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';

const Post: FunctionComponent = () => {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  const { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

export default Post;