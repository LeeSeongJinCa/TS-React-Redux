import React from 'react';
import { InboxBottom } from '../../components';

interface Props {
  inputLen: string;
}

const InboxBottomContainer: React.FC<Props> = ({ inputLen }) => {
  return (
    <InboxBottom inputLen={inputLen} />
  );
};

export default InboxBottomContainer;
