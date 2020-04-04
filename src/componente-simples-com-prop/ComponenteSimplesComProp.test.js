import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ComponenteSimplesComProp from './ComponenteSimplesComProp';

test('It should render with the correct name', async () => {
  const { getByText } = render(<ComponenteSimplesComProp nome="Mateus" />);
  expect(getByText("Olá Mateus")).toBeInTheDocument();
});

test('It shouldn\'t render if no props are passed', async () => {
  expect(() => ComponenteSimplesComProp()).toThrow();
});