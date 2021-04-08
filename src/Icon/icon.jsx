import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const icon = ({
  children,
  dataTestId = 'icon',
  viewBox = '0 0 16 16',
  width = 16,
  height = 16,
  aspectRatio = 'xMidYMid meet',
  className = '',
  ...rest
}) => {
  return (
    <svg
      data-testid={dataTestId}
      viewBox={viewBox}
      width={width}
      height={height}
      {...rest}
      className={classnames('icon', className)}
      preserveAspectRatio={aspectRatio}
    >
      {children}
    </svg>
  );
};

icon.propTypes = {
  children: PropTypes.node,
  dataTestId: PropTypes.string,
  viewBox: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  aspectRatio: PropTypes.string,
};

export default icon;
