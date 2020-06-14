import React from 'react';
import * as S from './style';

interface Props {}

const Main: React.FC<Props> = ({ children }) => {
  return <S.Main>{children}</S.Main>;
};

export default Main;
