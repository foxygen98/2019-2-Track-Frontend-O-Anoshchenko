import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders results link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('Результаты экзаменов по математике');
  expect(linkElement).toBeInTheDocument();
});
