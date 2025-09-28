import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { App } from './App.tsx';

describe('<App />', () => {
  it('should correct', () => {
    render(<App />);

    const div = screen.getByText('Application');

    expect(!!div).toBeTruthy();
  });
});
