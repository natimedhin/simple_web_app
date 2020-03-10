import React from 'react';
import { render } from '@testing-library/react';
import About from './About';

test('display new text', () => {
  const { getByText } = render(<About />);
  const linkElement = getByText(/My name is Nati and I have learned so much in doing this exercise. Thank you for pushing me to learn and try new things./i);
  expect(linkElement).toBeInTheDocument();
});
