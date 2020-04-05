import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PostService from './post-service';

export default function ComponenteQueChamaApi({ postId }) {
  const [postData, setPostData] = useState({ title: '' });

  useEffect(() => {
    (async () => {
      const _posts = await PostService.getPostById(postId);
      setPostData(_posts);
    })();
  });

  return (
    <>
      <span>{postData.title}</span>
      <span>{postData.text}</span>
    </>
  );
}

ComponenteQueChamaApi.propTypes = {
  postId: PropTypes.number.isRequired
};