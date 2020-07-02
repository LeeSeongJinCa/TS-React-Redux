import React, { useMemo } from 'react';

import * as S from './style';
import {
  ISelectList,
  selectList,
} from '../../static/selectForm';
import { notSvg } from '../../assets';

interface Props {
  isSpreadOut: boolean;
  onClickSelectedType: any;
  shownImg: any;
}

const TodoTableTypeList: React.FC<Props> = ({
  isSpreadOut,
  onClickSelectedType,
  shownImg,
}) => {
  const getSelectList: React.ReactElement[] = useMemo(() => {
    return selectList.map((item: ISelectList, i: number) =>
      <S.TodoTableTypeSeletedItem
        key={i}
        onClick={onClickSelectedType}
        data-type={item.type}
      >{item.type}</S.TodoTableTypeSeletedItem>,
    );
  }, []);

  return (
    <>
      <S.TodoTableTypeIcon ref={shownImg} src={notSvg} alt="icon" title="icon" />
      <S.TodoInputTableRowSeletedList className={isSpreadOut ? 'spread' : ''}>
        {getSelectList}
      </S.TodoInputTableRowSeletedList>
    </>
  );
};

export default TodoTableTypeList;
