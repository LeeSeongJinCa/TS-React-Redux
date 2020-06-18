import React from 'react';
import { Link } from 'react-router-dom';
import { addTodoSvg } from '../../assets';
import * as S from './style';

interface Props {}

const InboxNoList: React.FC<Props> = () => {
  return (
    <S.InboxNoList>
      <Link to="/todo">
        <S.InboxNoListWrap>
          <S.InboxNoListImg src={addTodoSvg} alt="addTodo" title="addTodo" />
        </S.InboxNoListWrap>
      </Link>
      <S.InboxNoListText>
        Cannot Found TodoList!
        <br />
        Click to create new Todo!
      </S.InboxNoListText>
    </S.InboxNoList>
  );
};

export default InboxNoList;
