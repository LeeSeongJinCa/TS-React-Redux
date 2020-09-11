import React, { ReactElement, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { InboxInput, InboxInputList, InboxNoList } from '../../components';
import { InboxSkeleton } from '../../components/Skeleton';
import { GetIInput } from '../../static/todoForm';
import { StoreState } from '../../modules';
import { deleteTodoThunk, updateTodoThunk } from '../../modules/todo';

interface Props {}

const InboxInputListContainer: React.FC<Props> = () => {
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

  const inputList: ReactElement[] = useMemo(
    () =>
      inputs.map((input: GetIInput) => {
        const { id, content, isComplete, createdDateTime } = input;
        const deleteTodo = () => {
          try {
            dispatch(deleteTodoThunk(id));
            successToast();
          } catch (err) {
            failToast();
          }
        };
        const updateTodo = () => {
          try {
            dispatch(updateTodoThunk(id));
            successToast();
          } catch (error) {
            failToast();
          }
        };
        return (
          <InboxInput
            key={id}
            id={id}
            content={content}
            isComplete={isComplete}
            createdDateTime={createdDateTime}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        );
      }),
    [inputs],
  );

  return (
    <InboxInputList
      inputList={
        loading ? (
          <InboxSkeleton count={4} />
        ) : inputList.length ? (
          inputList
        ) : (
          <InboxNoList />
        )
      }
    />
  );
};

export default InboxInputListContainer;
