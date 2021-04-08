import React from 'react';
import { render, screen } from '@testing-library/react';
import Icon from './icon';

describe('Icon', () => {
  it('should render', () => {
    const iconBody = <path d="M0 8h15.5m-6-6l6 6-6 6" />;

    render(<Icon data-testid={'icon'}>{iconBody}</Icon>);
    const icon = screen.getByTestId('icon');
    expect(icon.tagName.toLowerCase()).toBe('svg');
    expect(icon.children.length).toBe(1);
  });
});
