import React from 'react';
import InputField from '.';

export default {
  title: 'InputField',
};

export const Default = () => {
  return <InputField placeholder={'Place holder'} />;
};

export const PasswordRequired = () => {
  return <InputField type={'password'} required={true} placeholder={'Place holder'} />;
};

export const Email = () => {
  return <InputField type={'email'} value={'test@gmail.com'} placeholder={'Place holder'} />;
};

export const NumberInput = () => {
  return (
    <InputField type="number" value={15} placeholder={'Enter number'} maxValue={20} minValue={0} />
  );
};
