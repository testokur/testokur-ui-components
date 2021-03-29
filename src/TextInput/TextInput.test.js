import React from 'react';
import { render } from '@testing-library/react';
import TextInput from './TextInput';

describe('TextInput', () => {
  it('should forward data-attributes', () => {
    const { container } = render(<TextInput name="test" data-foo="bar" />);
    expect(container.querySelector('input')).toHaveAttribute('data-foo', 'bar');
    expect(container.querySelector('input')).not.toHaveAttribute('name', 'test');
  });
});
