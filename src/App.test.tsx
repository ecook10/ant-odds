import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// i've never really used the react testing lib before
// i think if i had more time here i would pull in jest

test('renders starting page', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Load Data/i);
  expect(buttonElement).toBeInTheDocument();
});

test('displays ants in state', () => {
  // TODO render + simulate "Load Data" button click
})

// TODO test that ants are ordered correctly while calculations running + after completion
//   ... probably best to manually tweak some component state here so we don't have to wait for the async process
