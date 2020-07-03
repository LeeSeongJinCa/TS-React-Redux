import React from 'react';
import { PreviewMain, PreviewAside } from '../../components';

import * as S from './style';

interface Props { }

const Preview: React.FC<Props> = () => {
  return (
    <S.PreviewHeader>
      <PreviewMain />
      <PreviewAside />
    </S.PreviewHeader>
  );
};

export default Preview;
