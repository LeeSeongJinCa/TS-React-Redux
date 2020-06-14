import React, { useState, useEffect, useRef } from 'react';
import {
  undoSvg,
  tuneSvg,
  cancelSvg,
  pencilSvg,
  sportsSvg,
  musicSvg,
  businessSvg,
  notSvg,
  arrowSvg,
} from '../../assets';
import * as S from './style';
import { TodoAddButton } from '../../components';

interface Props {

}

interface ISelectList {
  type: string;
  key: number;
  base64: string;
}

const Todo: React.FC<Props> = () => {
  const selectList: ISelectList[] = [
    {
      type: 'not',
      key: 1,
      base64: notSvg,
    }, {
      type: 'business',
      key: 2,
      base64: businessSvg,
    }, {
      type: 'study',
      key: 3,
      base64: pencilSvg,
    }, {
      type: 'sports',
      key: 4,
      base64: sportsSvg,
    }, {
      type: 'music',
      key: 5,
      base64: musicSvg,
    },
  ];
  const [isSpreadOut, setSpreadOut] = useState(false);
  const [selectedType, setSelectedType] = useState('Type');
  const shownImg: React.MutableRefObject<any> = useRef(null);

  const onClickSpreadOut = () => {
    setSpreadOut(!isSpreadOut);
  };

  const onClickSelectedType = (event: any) => {
    const { target: { dataset: { type, idx } } } = event;
    const baseData = selectList[idx].base64;
    setSelectedType(type);
    setSpreadOut(false);
    shownImg.current.src = baseData;
  };

  const getSelectList = () => {
    return selectList.map((item: ISelectList) => {
      return (
        <S.TodoInputTableRowSeletedItem
          key={item.key}
          onClick={onClickSelectedType}
          data-type={item.type}
          data-idx={item.key - 1}
        >{item.type}</S.TodoInputTableRowSeletedItem>
      );
    });
  };

  return (
    <S.Todo>
      <S.TodoHeader>
        <S.TodoHeaderNav>
          <S.TodoHeaderNavImg src={undoSvg} alt="undo" title="undo" />
          <S.TodoHeaderNavTiitle>Add new thing</S.TodoHeaderNavTiitle>
          <S.TodoHeaderNavImg src={tuneSvg} alt="menu" title="menu" />
        </S.TodoHeaderNav>
        <S.TodoHeaderShownImgWrap>
          <S.TodoHeaderShownImg ref={shownImg} src={notSvg} alt="study" title="study" />
        </S.TodoHeaderShownImgWrap>
      </S.TodoHeader>
      <S.TodoInputTable>
        <S.TodoInputTableRow>
          <S.TodoInputTableRowSeletedType onClick={onClickSpreadOut}>
            {selectedType}
          </S.TodoInputTableRowSeletedType>
          <S.TodoInputTableRowSeletedList className={isSpreadOut ? 'spread' : ''}>
            {getSelectList()}
          </S.TodoInputTableRowSeletedList>
        </S.TodoInputTableRow>
        <S.TodoInputTableRow>
          <S.TodoInputTableRowInput type="text" placeholder="Thing" />
          <S.TodoInputTableRowImg src={cancelSvg} alt="cancle" title="cancle" />
        </S.TodoInputTableRow>
        <S.TodoInputTableRow>
          <S.TodoInputTableRowInput type="text" placeholder="Place" />
          <S.TodoInputTableRowImg src={cancelSvg} alt="cancle" title="cancle" />
        </S.TodoInputTableRow>
        <S.TodoInputTableRow>
          <S.TodoInputTableRowInput type="text" placeholder="Time" />
          <S.TodoInputTableRowImg src={cancelSvg} alt="cancle" title="cancle" />
        </S.TodoInputTableRow>
        <S.TodoInputTableRow>
          <S.TodoInputTableRowInput type="text" placeholder="Notification" />
          <S.TodoInputTableRowImg src={cancelSvg} alt="cancle" title="cancle" />
        </S.TodoInputTableRow>
      </S.TodoInputTable>
      <TodoAddButton />
    </S.Todo>
  );
};

export default Todo;
