import React from 'react';
import Icon from './icon';

export default ({ className = 'icon-primary', ...props }) => {
  return (
    <Icon className={className} {...props}>
      <path d="M.5 2.5h15v11H.5z" />
      <path d="M.5 3.5l7.5 6 7.5-6m-15 10l6-5m3 0l6 5" />
    </Icon>
  );
};
