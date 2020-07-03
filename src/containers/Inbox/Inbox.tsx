import React, {
  useMemo,
  useEffect,
  useRef,
  MutableRefObject,
  ReactElement,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Inbox, InboxInput, InboxNoList, InboxLoading } from '../../components';
import {
  InboxInputListContainer,
  InboxBottomContainer,
} from '../../containers';
import { GetIInput } from '../../static/todoForm';
import { apiDeleteTodo } from '../../utils';
import { toast } from 'react-toastify';
import { StoreState } from '../../modules';
import { setTodoThunk, setTodos } from '../../modules/todo';

interface Props { }

const InboxContainer: React.FC<Props> = () => {
  const { inputs } = useSelector((state: StoreState) => state.todo);
  const dispatch = useDispatch();
  const isExistInput: MutableRefObject<any> = useRef(undefined);

  const dispatchTodo = (value: GetIInput[]) => {
    dispatch(setTodoThunk(value, setTodos));
  };

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
    const deleteTodo = async () => {
      try {
        await apiDeleteTodo(_id);
        dispatchTodo(inputs.filter((o: GetIInput) => o._id !== _id));
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

  useEffect(() => {
    isExistInput.current = inputList;
  }, [inputList]);

  return (
    <Inbox>
      <InboxInputListContainer
        inputList={typeof isExistInput.current === 'undefined'
          ? <InboxLoading />
          : (inputList.length ? inputList : <InboxNoList />)
        }
      />
      <InboxBottomContainer inputLen={inputs.length} />
    </Inbox>
  );
};

export default InboxContainer;
