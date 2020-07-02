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
  deleteTodo: () => never;
}

enum imgSvgs {
  'study' = pencilSvg,
  'sports' = sportsSvg,
  'music' = musicSvg,
  'business' = businessSvg,
}

const InboxInput: React.FC<Props> = ({
  type,
  thing,
  notification,
  endDate,
  deleteTodo,
}) => {
  return (
    <S.InboxInput>
      <S.InboxInputImgWrap>
        <S.InboxInputImg src={imgSvgs[type]} alt={type} title={type} />
      </S.InboxInputImgWrap>
      <S.InboxInputInfo>
        <S.InboxInputInfoTextH3>{thing}</S.InboxInputInfoTextH3>
        <S.InboxInputInfoTextP>{notification}</S.InboxInputInfoTextP>
      </S.InboxInputInfo>
      <S.InboxInputUntil>
        <S.InboxInputUntilEnd>
          기간:{` ${getDetailTime(endDate)}`}
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
