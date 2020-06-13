import React from 'react';
import * as S from './style';

interface Props { }

const PreviewAside: React.FC<Props> = () => {
  return (
    <S.MainHeaderPreviewAside>
      <S.MainHeaderPreviewAsideBox>
        <S.MainHeaderPreviewAsideSummary>
          <div>
            <h2>24</h2><span>개인</span>
          </div>
          <div>
            <h2>15</h2><span>업무</span>
          </div>
        </S.MainHeaderPreviewAsideSummary>
        <S.MainHeaderPreviewAsideDone>
          <S.MainHeaderPreviewAsideSvg>
            <S.MainHeaderPreviewAsideCircle cx="25" cy="25" r="20" />
            <S.MainHeaderPreviewAsideCircle cx="25" cy="25" r="20" />
          </S.MainHeaderPreviewAsideSvg>
        </S.MainHeaderPreviewAsideDone>
      </S.MainHeaderPreviewAsideBox>
    </S.MainHeaderPreviewAside>
  )
};

export default PreviewAside;
