import React, { MouseEvent, useCallback } from 'react';
import {
  setStartDate,
  setEndDate,
  setScheduleThunk,
} from '../../modules/schedule';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../modules';
import { Calendar } from '../../components';

const CalendarContainer: React.FC = () => {
  const dispatch = useDispatch();
  const schedule = useSelector((state: StoreState) => state.schedule);
  const { startDate } = schedule;

  const setSchedule = (e: MouseEvent<HTMLDivElement>) => {
    const { id } = e.currentTarget.dataset;
    if (startDate === '') {
      dispatch(setScheduleThunk(id, setStartDate));
    } else {
      dispatch(setScheduleThunk(id, setEndDate));
    }
  };

  return <Calendar schedule={schedule} setSchedule={setSchedule} />;
};

export default CalendarContainer;
