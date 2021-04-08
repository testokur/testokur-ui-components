import React from 'react';
import { EnvelopeIcon, LockedIcon } from '.';

export default {
  title: 'Icons',
};

export const Default = () => {
  return (
    //TODO: Refactor this into a separate component later
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <EnvelopeIcon />
        <p>Envelope Icon</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <LockedIcon />
        <p>Locked Icon</p>
      </div>
    </div>
  );
};
