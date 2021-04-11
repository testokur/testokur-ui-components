import React from 'react';
import PropTypes from 'prop-types';
import InputTypes from './inputTypes';
import { generateRandomId } from '../utils';

const inputField = ({
  dataTestId = 'input',
  type = 'text',
  id,
  name,
  placeholder,
  disabled = false,
  readOnly = false,
  required = false,
  value,
  minlength,
  maxlength,
  ...rest
}) => {
  const cId = id || generateRandomId('input');

  return (
    <input
      data-testid={dataTestId}
      type={type}
      id={cId}
      name={name}
      disabled={disabled}
      readOnly={readOnly}
      value={value}
      placeholder={placeholder}
      value={value}
      minLength={minlength}
      maxLength={maxlength}
      required={required}
      className={'input'}
      {...rest}
    />
  );
};

inputField.propTypes = {
  dataTestId: PropTypes.string,
  type: PropTypes.oneOf(InputTypes),
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minlength: PropTypes.number,
  maxlength: PropTypes.number,
  required: PropTypes.bool,
};

export default inputField;
