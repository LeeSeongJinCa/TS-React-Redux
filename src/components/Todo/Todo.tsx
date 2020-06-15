import React, { useState, useRef, useMemo } from 'react';
import * as S from './style';
import {
  pencilSvg,
  sportsSvg,
  musicSvg,
  businessSvg,
  notSvg,
} from '../../assets';
import {
  TodoHeader,
  TodoTable,
  TodoTableType,
  TodoAddButton,
} from '../../components';

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

  const onClickSelectedType = (event: any) => {
    const { type, idx } = event.target.dataset;
    const baseData = selectList[idx].base64;
    setSelectedType(type);
    setSpreadOut(false);
    shownImg.current.src = baseData;
  };

  const getSelectList: React.ReactElement[] = useMemo(() => {
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
  }, []);

  return (
    <S.Todo>
      <TodoHeader imgRef={shownImg} />
      <TodoTable>
        <TodoTableType
          isSpreadOut={isSpreadOut}
          selectedType={selectedType}
          getSelectList={getSelectList}
          setSpreadOut={setSpreadOut}
        />
      </TodoTable>
      <TodoAddButton />
    </S.Todo>
  );
};

export default Todo;
