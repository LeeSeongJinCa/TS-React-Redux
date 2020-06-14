import React from 'react';
import { Main, Preview, Inbox } from '../../components';
import { InboxInputListContainer, InboxBottomContainer } from '../../containers';

interface Props {}

const MainContainer: React.FC<Props> = () => {
  return (
    <Main
      previewWrap={<Preview />}
      inboxWrap={
        <Inbox
          inputList={<InboxInputListContainer />}
          inboxBottom={<InboxBottomContainer />}
        />
      }
    />
  );
};

export default MainContainer;
