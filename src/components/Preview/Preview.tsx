import React from 'react';
import { PreviewMain, PreviewAside } from '../../components';

import * as S from './style';
import { GetIInput } from '../../static/todoForm';

interface Props {
  inputs: GetIInput[];
}

const Preview: React.FC<Props> = ({
  inputs,
}) => {
  return (
    <S.PreviewHeader>
      <PreviewMain />
      <PreviewAside inputs={inputs} />
    </S.PreviewHeader>
  );
};

export default Preview;
