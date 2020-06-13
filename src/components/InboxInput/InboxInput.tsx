import * as React from 'react';
import * as S from './style';
// import pencilSvg from '../../assets/icon/pencil.svg';

interface Props { }

const InboxInput: React.FC<Props> = () => {
  return (
    <S.InboxInput>
      <S.InboxInputImgWrap>
        {/* <S.InboxInputImg src={pencilSvg} alt="pencil" title="pencil" /> */}
      </S.InboxInputImgWrap>
      <S.InboxInputInfo>
        <h3>Final design</h3>
        <p>Inuse Exprience</p>
      </S.InboxInputInfo>
      <S.InboxInputUntil>
        <span>9am</span>
      </S.InboxInputUntil>
    </S.InboxInput>
  );
};

export default InboxInput;
