import React from 'react';
import { text } from '@storybook/addon-knobs';
import Heading from '.';

export default {
  title: 'Heading',
};

export const Default = () => {
  const customTitle = text('Title', 'This is a Header');
  return <Heading>{customTitle}</Heading>;
};
