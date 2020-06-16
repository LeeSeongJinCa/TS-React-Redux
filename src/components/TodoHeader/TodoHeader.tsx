import React from 'react';
import { Link } from 'react-router-dom';
import {
  notSvg,
  undoSvg,
} from '../../assets';
import * as S from './style';

interface Props {
  imgRef: React.MutableRefObject<any>;
}

const Todo: React.FC<Props> = ({ imgRef }) => {
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
      <S.TodoHeaderShownImgWrap>
        <S.TodoHeaderShownImg ref={imgRef} src={notSvg} alt="study" title="study" />
      </S.TodoHeaderShownImgWrap>
    </S.TodoHeader>
  );
};

export default Todo;
