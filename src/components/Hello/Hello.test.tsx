import React from 'react';
import { render } from '@testing-library/react';
import Hello from './Hello';

describe('<Hello/>', () => {
  it('should render <Hello/> successfully', () => {
    render(<Hello />);
  });
});
