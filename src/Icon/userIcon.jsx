import React from 'react';
import Icon from './icon';

export default ({ className = 'icon-primary', ...props }) => {
  return (
    <Icon className={className} {...props}>
      <path d="M.5 16a7.5 7.5 0 0 1 15 0" />
      <circle cx="8" cy="4.5" r="4" />
    </Icon>
  );
};
