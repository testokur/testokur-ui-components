import React from 'react';
import { filterDataAttributes } from '../utils';

const TextInput = props => {
  return <input type="text" {...filterDataAttributes(props)} />;
};

TextInput.displayName = 'TextInput';

export default TextInput;
