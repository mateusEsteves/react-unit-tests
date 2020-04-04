import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ComponenteSimplesComProp from './ComponenteSimplesComProp';

test('Deve renderizar com o nome correto', async () => {
  const { getByText } = render(<ComponenteSimplesComProp nome="Mateus" />);
  expect(getByText("Olá Mateus")).toBeInTheDocument();
});

test('Deve lançar excessão quando o componente não receber props', async () => {
  expect(() => ComponenteSimplesComProp()).toThrow();
});