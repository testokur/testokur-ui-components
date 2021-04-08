import React from 'react';
import Icon from './icon';

export default ({ className = 'icon-primary', ...props }) => {
  return (
    <Icon className={className} {...props}>
      <path d="M1.5 6.5h13v9h-13zm2 0V5a4.5 4.5 0 0 1 9 0v1.5m-4.51 6.793v-3" />
      <circle cx="8" cy="10" r=".5" />
    </Icon>
  );
};
