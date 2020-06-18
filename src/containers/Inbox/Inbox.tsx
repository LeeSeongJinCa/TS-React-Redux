import React, {
  useState,
  useMemo,
  useEffect,
  useRef,
  MutableRefObject,
  ReactElement,
  Dispatch,
  SetStateAction,
} from 'react';
import { Inbox, InboxInput, InboxNoList } from '../../components';
import {
  InboxInputListContainer,
  InboxBottomContainer,
} from '../../containers';
import { URL } from '../../static/server';
import axios from 'axios';

interface Props {

}

interface IInputs {
  type: string;
  thing: string;
  time: number;
  notification: string;
}

const InboxContainer: React.FC<Props> = () => {
  const [inputs, setInputs]:
    [IInputs[], Dispatch<SetStateAction<IInputs[]>>] = useState([]);
  const isExistInput: MutableRefObject<any> = useRef(undefined);

  const inputList: ReactElement[] = useMemo(
    () => inputs.map((input: IInputs, i) => {
      return (<InboxInput
        key={i}
        type={input.type}
        thing={input.thing}
        time={input.time}
        notification={input.notification}
      />);
    },
  ), [inputs]);

  useEffect(() => {
    axios.get(`${URL}/todos`)
      .then((data) => {
        setInputs(data.data);
      });
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
