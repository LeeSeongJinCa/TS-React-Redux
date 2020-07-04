import React, {
  useMemo,
  ReactElement,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Inbox, InboxInput, InboxNoList, InboxLoading } from '../../components';
import {
  InboxInputListContainer,
  InboxBottomContainer,
} from '../../containers';
import { GetIInput } from '../../static/todoForm';
import { toast } from 'react-toastify';
import { StoreState } from '../../modules';
import { deleteTodoThunk } from '../../modules/todo';

interface Props { }

const InboxContainer: React.FC<Props> = () => {
  const { inputs, loading } = useSelector((state: StoreState) => state.todo);
  const dispatch = useDispatch();

  const successToast = () => {
    toast.success('Success to delete new thing', {
      position: 'top-right',
      autoClose: 2000,
    });
  };
  const failToast = () => {
    toast.error('Fail to delete new thing', {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  const inputList: ReactElement[] = useMemo(() => inputs.map((input: GetIInput) => {
    const { _id, type, thing, notification, endDate } = input;
    const deleteTodo = () => {
      try {
        dispatch(deleteTodoThunk(_id));
        successToast();
      } catch (err) {
        failToast();
      }
    };
    return (<InboxInput
      key={_id}
      type={type}
      thing={thing}
      notification={notification}
      endDate={endDate}
      deleteTodo={deleteTodo}
    />);
  }), [inputs]);

  return (
    <Inbox>
      <InboxInputListContainer
        inputList={loading
          ? <InboxLoading />
          : (inputList.length ? inputList : <InboxNoList />)
        }
      />
      <InboxBottomContainer inputLen={inputs.length} />
    </Inbox>
  );
};

export default InboxContainer;
