import React from 'react';
import * as S from './style';
import {
  cancelSvg,
} from '../../assets';

interface Props { }

const TodoTableRowImg: React.FC<Props> = () => {
  return <S.TodoInputTableRowImg src={cancelSvg} alt="cancle" title="cancle" />;
};

export default TodoTableRowImg;
