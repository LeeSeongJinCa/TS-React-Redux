import React, { useEffect } from 'react';
import { Main } from '../../components';
import { InboxContainer, PreviewContainer } from '../../containers';

interface Props {}

const MainContainer: React.FC<Props> = () => {
  return (
    <Main>
      <PreviewContainer />
      <InboxContainer />
    </Main>
  );
};

export default MainContainer;
