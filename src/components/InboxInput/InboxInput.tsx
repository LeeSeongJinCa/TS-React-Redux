import * as React from 'react';
import * as S from './style';
import {
  pencilSvg,
  sportsSvg,
  musicSvg,
  businessSvg,
  notSvg,
} from '../../assets';
import { getDetailTime } from '../../static/publicFunction';

interface Props {
  type: string;
  thing: string;
  time: number;
  notification: string;
}

const InboxInput: React.FC<Props> = ({ type, thing, time, notification }) => {
  return (
    <S.InboxInput>
      <S.InboxInputImgWrap>
        <S.InboxInputImg src={pencilSvg} alt="pencil" title="pencil" />
      </S.InboxInputImgWrap>
      <S.InboxInputInfo>
        <S.InboxInputInfoTextH3>{thing}</S.InboxInputInfoTextH3>
        <S.InboxInputInfoTextP>{notification}</S.InboxInputInfoTextP>
      </S.InboxInputInfo>
      <S.InboxInputUntil>
        <span>{getDetailTime(time)}</span>
      </S.InboxInputUntil>
    </S.InboxInput>
  );
};

export default InboxInput;
