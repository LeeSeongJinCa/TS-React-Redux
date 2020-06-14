import React, { useRef } from 'react';
import { InboxBottom } from '../../components';

interface Props { }

const InboxBottomContainer: React.FC<Props> = () => {
  const completed: React.MutableRefObject<number> = useRef(3);

  return (
    <InboxBottom completed={completed} />
  );
};

export default InboxBottomContainer;
