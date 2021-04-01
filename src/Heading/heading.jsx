import React from 'react';
import PropTypes from 'prop-types';
import ElementTypes from './elementTypes';
import classnames from 'classnames';

const heading = ({ children, renderAs = 'h1', size = 1, dataTestId = 'heading' }) => {
  const Element = renderAs;
  const headingClass = classnames({
    [`title${size}`]: size,
  });
  return (
    <Element className={headingClass} data-testid={dataTestId}>
      {children}
    </Element>
  );
};

heading.propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOf(ElementTypes),
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  dataTestId: PropTypes.string,
};

export default heading;
