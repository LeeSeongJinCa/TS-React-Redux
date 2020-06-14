import React from 'react';
import { Inbox } from '../../components';
import { InboxInputListContainer, InboxBottomContainer } from '../../containers';

interface Props {

}

const InboxContainer: React.FC<Props> = () => {
  return (
    <Inbox>
      <InboxInputListContainer />
      <InboxBottomContainer />
    </Inbox>
  );
};

export default InboxContainer;
