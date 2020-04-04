import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ComponenteComEvento from './ComponenteComEvento';

test('Deve renderizar o componente como inativo', async () => {
  const { getByText } = render(<ComponenteComEvento />);
  expect(getByText('Inativo')).toBeInTheDocument();
});

test('Ao clicar no botão deve renderizar o componente como ativo', async () => {
  const { getByText, container } = render(<ComponenteComEvento />);
  const button = container.querySelector('button');

  expect(button).not.toBeNull();
  fireEvent.click(button);
  expect(getByText('Ativo')).toBeInTheDocument();
});

test('Ao clicar no botão duas vezes deve renderizar o componente como inativo', async () => {
  const { getByText, container } = render(<ComponenteComEvento />);
  const button = container.querySelector('button');

  expect(button).not.toBeNull();
  fireEvent.click(button);
  fireEvent.click(button);
  expect(getByText('Inativo')).toBeInTheDocument();
});