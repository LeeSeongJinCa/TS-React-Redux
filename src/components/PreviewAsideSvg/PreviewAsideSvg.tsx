import React, { useRef, MutableRefObject } from 'react';

import * as S from './style';

interface Props {
  progress: number;
}

const PreviewAsideSvg: React.FC<Props> = ({ progress }) => {
  const ref: MutableRefObject<any> = useRef(null);

  return (
    <S.MainHeaderPreviewAsideSvg ref={ref}>
      <S.MainHeaderPreviewAsideCircle cx="39" cy="25" r="20" />
      <S.MainHeaderPreviewAsideCircle
        cx="39"
        cy="25"
        r="20"
        progress={progress}
      />
    </S.MainHeaderPreviewAsideSvg>
  );
};

export default PreviewAsideSvg;
