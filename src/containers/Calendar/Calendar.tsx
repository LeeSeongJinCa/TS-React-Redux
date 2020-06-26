import React, { MouseEvent } from 'react';
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

  const setSchedule = (e: MouseEvent<HTMLDivElement>) => {
    const { id } = e.currentTarget.dataset;

    if (schedule.startDate === '') {
      dispatch(setScheduleThunk(id, setStartDate));
    } else {
      dispatch(setScheduleThunk(id, setEndDate));
    }
  };

  return <Calendar schedule={schedule} setSchedule={setSchedule} />;
};

export default CalendarContainer;
