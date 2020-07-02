import React from 'react';

import * as S from './style';
import { loadingSvg } from '../../assets';

interface Props { }

const InboxLoading: React.FC<Props> = () => {
  return (
    <S.InboxLoading>
      <S.InboxLoadingImg src={loadingSvg} alt="loading" title="loading" />
      <S.InboxLoadingText>
        We are loading your todo list! Plz wait a sec
      </S.InboxLoadingText>
    </S.InboxLoading>
  );
};

export default InboxLoading;
