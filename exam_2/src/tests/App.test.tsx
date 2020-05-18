import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

test('renders translator link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('TechnoTrack Translate');
  expect(linkElement).toBeInTheDocument();
});
