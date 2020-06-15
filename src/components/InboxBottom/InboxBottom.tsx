import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import { plusSvg } from '../../assets';

interface Props {
  completed: React.MutableRefObject<number>;
}

const InboxBottom: React.FC<Props> = ({ completed }) => {
  return (
    <S.InboxBottom>
      <S.InboxBottomCompleted>
        <span>COMPLETED</span>
        <S.InboxBottomCompletedNum>{completed.current}</S.InboxBottomCompletedNum>
      </S.InboxBottomCompleted>
      <Link to="/todo">
        <S.InboxBottomPlus src={plusSvg} alt="plus" title="plus" />
      </Link>
    </S.InboxBottom>
  );
};

export default InboxBottom;
