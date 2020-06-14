import React from 'react';
import { InboxWrap, InboxInputList, InboxBottom } from '../../components';

interface Props {

}

const InboxContainer: React.FC<Props> = () => {
  return (
    <InboxWrap>
      <InboxInputList />
      <InboxBottom />
    </InboxWrap>
  )
}

export default InboxContainer;
