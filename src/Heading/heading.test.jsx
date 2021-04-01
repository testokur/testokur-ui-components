import React from 'react';
import { render, screen } from '@testing-library/react';
import Heading from './heading';

describe('Heading', () => {
  it('should render with defaults', () => {
    const content = 'This is a header';

    render(<Heading>{content}</Heading>);

    const heading = screen.getByTestId('heading');
    expect(heading).toHaveTextContent(content);
    expect(heading.tagName.toLowerCase()).toBe('h1');
    expect(heading).toHaveClass('title1');
  });

  it("should render with passed props", () =>{
    const content = 'This is also a header';
    render(<Heading renderAs="h3" size={5} >{content}</Heading>);

    const heading = screen.getByTestId('heading');
    expect(heading).toHaveTextContent(content);
    expect(heading.tagName.toLowerCase()).toBe('h3');
    expect(heading).toHaveClass('title5');
  });
});
