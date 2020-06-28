import React, {
  useState,
  useMemo,
  useEffect,
  useRef,
  MutableRefObject,
  Dispatch,
  SetStateAction,
  ReactElement,
  MouseEvent,
} from 'react';
import axios from 'axios';

import { GetIInput } from '../../static/todoForm';
import { URL } from '../../static/server';
import { Inbox, InboxInput, InboxNoList } from '../../components';
import {
  InboxInputListContainer,
  InboxBottomContainer,
} from '../../containers';

interface Props { }

const InboxContainer: React.FC<Props> = () => {
  const [inputs, setInputs]:
    [GetIInput[], Dispatch<SetStateAction<GetIInput[]>>] = useState([]);
  const isExistInput: MutableRefObject<any> = useRef(undefined);

  const getTodo = async () => {
    const get = await axios.get(`${URL}/todos`);
    setInputs(get.data);
  };

  const inputList: ReactElement[] = useMemo(() => inputs.map((input: GetIInput) => {
    const { _id, type, thing, notification, endDate } = input;
    const handleDeleteInbox = async () => {
      if (!confirm('삭제하시겠습니까?')) { return; }
      try {
        await axios.delete(`${URL}/todos/${_id}`);
        const filterInputs = inputs.filter((o: GetIInput) => o._id !== _id);
        setInputs(filterInputs);
      } catch { }
    };
    return (<InboxInput
      key={_id}
      type={type}
      thing={thing}
      notification={notification}
      endDate={endDate}
      handleDeleteInbox={handleDeleteInbox}
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
          ? null
          : (inputList.length ? inputList : <InboxNoList />)
        }
      />
      <InboxBottomContainer inputLen={inputs.length} />
    </Inbox>
  );
};

export default InboxContainer;
