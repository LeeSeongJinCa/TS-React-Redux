import React from 'react';
import * as S from './style';
import { Preview, Inbox } from '../';

interface Props { }

const Main: React.FC<Props> = () => {
  return (
    <S.Main>
      <S.MainHeader>
        <Preview />
      </S.MainHeader>
      <Inbox />
    </S.Main>
  );
};

export default Main;
