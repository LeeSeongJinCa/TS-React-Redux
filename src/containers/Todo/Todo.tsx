import React, { useRef, useState } from 'react';
import {
  pencilSvg,
  sportsSvg,
  musicSvg,
  businessSvg,
  notSvg,
} from '../../assets';
import {
  Todo,
  TodoHeader,
  TodoAddButton,
} from '../../components';
import {
  TodoMainContainer,
} from '../../containers';

interface Props {

}

interface ISelectList {
  type: string;
  key: number;
  base64: string;
}

const TodoContainer: React.FC<Props> = () => {
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

  return (
    <Todo>
      <TodoHeader imgRef={shownImg} />
      <TodoMainContainer
        selectList={selectList}
        isSpreadOut={isSpreadOut}
        selectedType={selectedType}
        onClickSelectedType={onClickSelectedType}
        setSpreadOut={setSpreadOut}
      />
      <TodoAddButton />
    </Todo>
  );
};

export default TodoContainer;
