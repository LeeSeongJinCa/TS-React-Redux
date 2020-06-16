import React from 'react';
import { Link } from 'react-router-dom';
import {
  undoSvg,
} from '../../assets';
import * as S from './style';

interface Props {
  imgRef: React.MutableRefObject<any>;
}

const Todo: React.FC<Props> = () => {
  return (
    <S.TodoHeader>
      <S.TodoHeaderNav>
        <Link to="/">
          <S.TodoHeaderNavImg
            src={undoSvg}
            alt="undo"
            title="undo"
          />
        </Link>
        <S.TodoHeaderNavTiitle>Add new thing</S.TodoHeaderNavTiitle>
      </S.TodoHeaderNav>
    </S.TodoHeader>
  );
};

export default Todo;
