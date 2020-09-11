import React from 'react';
import * as S from './style';

import {
  pencilSvg,
  sportsSvg,
  musicSvg,
  businessSvg,
  closeSvg,
} from '../../assets';
import { GetIInput } from '../../static/todoForm';
import { getDetailTime } from '../../static/publicFunction';

interface Props extends GetIInput {
  deleteTodo: () => void;
  updateTodo: () => void;
}

enum imgSvgs {
  'study' = pencilSvg,
  'sports' = sportsSvg,
  'music' = musicSvg,
  'business' = businessSvg,
}

const InboxInput: React.FC<Props> = ({
  content,
  isComplete,
  createdDateTime,
  deleteTodo,
  updateTodo,
}) => {
  return (
    <S.InboxInput>
      {isComplete && <div className="lineThrough" />}
      <S.InboxInputImgWrap>
        <S.InboxInputImg
          src={pencilSvg}
          alt={'study'}
          title={'study'}
          onClick={updateTodo}
        />
      </S.InboxInputImgWrap>
      <S.InboxInputInfo>
        <S.InboxInputInfoTextH3>{content}</S.InboxInputInfoTextH3>
        <S.InboxInputInfoTextP>{content}</S.InboxInputInfoTextP>
      </S.InboxInputInfo>
      <S.InboxInputUntil>
        <S.InboxInputUntilEnd>
          {/* 기간:{` ${getDetailTime(createdDateTime)}`} */}
          생성 날짜: {createdDateTime}
        </S.InboxInputUntilEnd>
        <S.InboxInputUntilDeleteImg
          src={closeSvg}
          alt="delete"
          title="delete"
          onClick={deleteTodo}
        />
      </S.InboxInputUntil>
    </S.InboxInput>
  );
};

export default InboxInput;
