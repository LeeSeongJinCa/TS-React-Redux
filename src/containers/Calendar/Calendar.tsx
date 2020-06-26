import React from 'react';
import * as actions from '../../modules/counter';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../modules';
import { Calendar } from '../../components';

const CalendarContainer: React.FC = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: StoreState) => state.counter);

  const setCounterNumber = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { type } = e.currentTarget.dataset;
    switch (type) {
      case actions.INCREMENT:
        dispatch(actions.setCounterThunk(1, actions.setCounterIn));
        break;
      case actions.DECREMENT:
        dispatch(actions.setCounterThunk(-1, actions.setCounterDe));
        break;
      default:
        break;
    }
  };

  return <Calendar count={counter.number} setCounterNumber={setCounterNumber} />;
};

export default CalendarContainer;
