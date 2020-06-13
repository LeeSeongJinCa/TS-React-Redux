import * as React from 'react';
import * as S from './style';
import hamburgerIconSvg from '../../assets/icon/hamburgerIcon.svg';

interface Props {}

const PreviewMain: React.FC<Props> = () => {
  return (
    <S.PreviewMain>
      <div>
        <S.PreviewHamburgerMenu
          src={hamburgerIconSvg}
          alt="hamburgerIcon"
          title="hamburgerIcon"
        />
      </div>
      <h1>Your <br /> Things</h1>
      <span>2020년 6월 12일</span>
    </S.PreviewMain>
  )
}

export default PreviewMain;
