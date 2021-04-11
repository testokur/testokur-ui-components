import React from 'react';
import { render, screen } from '@testing-library/react';

import InputField from '.';

describe('InputField', () => {
  it('should render expected DOM', () => {
    render(
      <InputField
        name="name"
        placeholder="placeholder"
        disabled={true}
        readOnly={true}
        required={true}
        value="value"
        minlength={1}
        maxlength={100}
      />,
    );
    const input = screen.getByTestId('input');
    expect(input.tagName.toLowerCase()).toBe('input');
    expect(input).toHaveAttribute('name', 'name');
    expect(input).toHaveAttribute('id');
    expect(input).toHaveAttribute('placeholder', 'placeholder');
    expect(input).toHaveAttribute('value', 'value');
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('minlength', '1');
    expect(input).toHaveAttribute('maxlength', '100');
    expect(input).toHaveAttribute('disabled');
    expect(input).toHaveAttribute('readonly');
    expect(input).toHaveAttribute('required');
  });
});
