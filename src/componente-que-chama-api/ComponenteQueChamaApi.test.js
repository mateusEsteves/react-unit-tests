import React from 'react';
import { render, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import ComponenteQueChamaApi from './ComponenteQueChamaApi';
import PostService from './post-service';
jest.mock('./post-service');

beforeEach(() => {
  jest.resetModules();
})

test('Deve lançar exceção quando for renderizado sem props', async () => {
  expect(() => ComponenteQueChamaApi()).toThrow();
});

test('Deve renderizar corretamente o componente', async () => {
  const fakePost = {
    text: 'TEST_TEXT',
    title: 'TEST_TITLE'
  };

  PostService.getPostById.mockResolvedValue(fakePost);

  const { getByText } = render(<ComponenteQueChamaApi postId={1} />);
  
  await waitForElement(() => getByText('TEST_TITLE'));
  await waitForElement(() => getByText('TEST_TEXT'));
  expect(PostService.getPostById).toHaveBeenCalled();
  expect(PostService.getPostById).toHaveBeenCalledWith(1);
});