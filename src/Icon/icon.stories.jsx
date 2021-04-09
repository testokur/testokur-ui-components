import React from 'react';
import { EnvelopeIcon, LockedIcon, UserIcon } from '.';

export default {
  title: 'Icons',
};

const IconInfo = props => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {props.children}
      <p>{props.name}</p>
    </div>
  );
};

export const Default = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <IconInfo name={'Envelope Icon'}>
        <EnvelopeIcon />
      </IconInfo>
      <IconInfo name={'Locked Icon'}>
        <LockedIcon />
      </IconInfo>
      <IconInfo name={'User Icon'}>
        <UserIcon />
      </IconInfo>
    </div>
  );
};
