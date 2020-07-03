import React, {
  useMemo,
  useEffect,
  useRef,
  MutableRefObject,
  ReactElement,
} from 'react';

import { GetIInput } from '../../static/todoForm';
import { apiDeleteTodo } from '../../utils';
import { Inbox, InboxInput, InboxNoList, InboxLoading } from '../../components';
import {
  InboxInputListContainer,
  InboxBottomContainer,
} from '../../containers';
import { toast } from 'react-toastify';

interface Props {
  inputs: GetIInput[];
  getTodo: any;
  setTodo: any;
}

const InboxContainer: React.FC<Props> = ({
  inputs,
  getTodo,
  setTodo,
}) => {
  const isExistInput: MutableRefObject<any> = useRef(undefined);

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
        successToast();
        setTodo(inputs.filter((o: GetIInput) => o._id !== _id));
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
    getTodo();
  }, []);
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
