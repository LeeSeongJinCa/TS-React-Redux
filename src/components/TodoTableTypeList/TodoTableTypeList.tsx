import React, { useMemo } from 'react';
import * as S from './style';

interface Props {
  isSpreadOut: boolean;
  onClickSelectedType: any;
  selectList: ISelectList[];
}

interface ISelectList {
  type: string;
  key: number;
  base64: string;
}

const TodoTableTypeList: React.FC<Props> = ({
  isSpreadOut,
  onClickSelectedType,
  selectList,
}) => {
  const getSelectList: React.ReactElement[] = useMemo(() =>
    selectList.map((item: ISelectList) =>
      <S.TodoTableTypeSeletedItem
        key={item.key}
        onClick={onClickSelectedType}
        data-type={item.type}
        data-idx={item.key - 1}
      >{item.type}</S.TodoTableTypeSeletedItem>,
    ),
  []);

  return (
    <S.TodoInputTableRowSeletedList className={isSpreadOut ? 'spread' : ''}>
      {getSelectList}
    </S.TodoInputTableRowSeletedList>
  );
};

export default TodoTableTypeList;
