import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import { plusSvg } from '../../assets';

interface Props {
  inputLen: string;
}

const InboxBottom: React.FC<Props> = ({ inputLen }) => {
  return (
    <S.InboxBottom>
      <S.InboxBottomCompleted>
        <span>COMPLETED</span>
        <S.InboxBottomCompletedNum>{inputLen}</S.InboxBottomCompletedNum>
      </S.InboxBottomCompleted>
      <Link to="/todo">
        <S.InboxBottomPlus src={plusSvg} alt="plus" title="plus" />
      </Link>
    </S.InboxBottom>
  );
};

export default InboxBottom;
