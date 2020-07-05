import React from 'react';
import { useSelector } from 'react-redux';

import { InboxBottom } from '../../components';
import { StoreState } from '../../modules';

interface Props { }

const InboxBottomContainer: React.FC<Props> = () => {
  const { inputs } = useSelector((state: StoreState) => state.todo);

  return (
    <InboxBottom inputLen={inputs.length} />
  );
};

export default InboxBottomContainer;
