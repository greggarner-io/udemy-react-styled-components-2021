import React from 'react';
import { HipsterButton } from '../components/Buttons';

const ComponentName = (props) => {
  return (
    <>
      <HipsterButton>Click Me</HipsterButton>
      <HipsterButton as='a' href="https://www.google.com" target="_blank">Click Me</HipsterButton>
      <HipsterButton large>Click Me</HipsterButton>
    </>
  )
}

export default ComponentName;