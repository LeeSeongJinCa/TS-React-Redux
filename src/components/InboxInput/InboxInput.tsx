import * as React from 'react';
import * as S from './style';
import pencilSvg from '../../assets/icon/pencil.svg';

interface Props {
  title: string;
  subTitle: string;
  until: string;
}

const InboxInput: React.FC<Props> = ({ title, subTitle, until }) => {
  return (
    <S.InboxInput>
      <S.InboxInputImgWrap>
        <S.InboxInputImg src={pencilSvg} alt="pencil" title="pencil" />
      </S.InboxInputImgWrap>
      <S.InboxInputInfo>
        <h3>{title}</h3>
        <p>{subTitle}</p>
      </S.InboxInputInfo>
      <S.InboxInputUntil>
        <span>{until}</span>
      </S.InboxInputUntil>
    </S.InboxInput>
  );
};

export default InboxInput;
