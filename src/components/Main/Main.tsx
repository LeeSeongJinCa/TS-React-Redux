import React from 'react';
import * as S from './style';

interface Props {
  previewWrap: React.ReactElement;
  inboxWrap: React.ReactElement;
}

const Main: React.FC<Props> = ({ previewWrap, inboxWrap }) => {
  return (
    <S.Main>
      <S.MainHeader>
        {previewWrap}
      </S.MainHeader>
      {inboxWrap}
    </S.Main>
  );
};

export default Main;
