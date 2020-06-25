import React, {
  Dispatch,
  useState,
  useRef,
  SetStateAction,
  MutableRefObject,
  useEffect,
} from 'react';
import * as S from './style';
import { IInputsType } from '../../static/todoForm';

interface Props {
  todoDispatch: Dispatch<IInputsType>;
}

const TodoCalendarSetting: React.FC<Props> = ({
  todoDispatch,
}) => {
  const [thisMonth, setThisMonth]:
    [string, Dispatch<SetStateAction<string>>] = useState('');
  const startRef: MutableRefObject<any> = useRef(null);
  const endRef: MutableRefObject<any> = useRef(null);

  const onChangeStartMax = () => {
    if (startRef.current.value) endRef.current.min = startRef.current.value;
  };
  const onChangeEndMin = () => {
    if (endRef.current.value) startRef.current.max = endRef.current.value;
  };

  useEffect(() => {
    const today: Date = new Date(),
      fullYear: number = today.getFullYear(),
      month: number = today.getMonth();
    setThisMonth(`${fullYear}-${month < 10 ? `0${month}` : month}`);
  }, []);

  return (
    <S.CalnedarDaySetting>
      <h1>달력 날짜: <span id="this_month">{thisMonth}</span></h1>
      <label htmlFor="title">제목</label>
      <input type="text" autoComplete="off" name="title" id="title" placeholder="제목" /><br />
      <label htmlFor="start">시작 날짜</label>
      <input type="date" ref={startRef} onChange={onChangeStartMax} name="start" id="start" /><br />
      <label htmlFor="end">종료 날짜</label>
      <input type="date" ref={endRef} onChange={onChangeEndMin} name="end" id="end" /><br />
      <button id="click">스케줄 만들기</button>
      <div id="setting_month">
        <span>test</span>
        <button>-</button>
        <button>+</button>
      </div>
    </S.CalnedarDaySetting>
  );
};

export default TodoCalendarSetting;
