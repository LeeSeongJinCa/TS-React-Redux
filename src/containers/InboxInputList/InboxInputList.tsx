import React, { useMemo, useEffect, useState } from 'react';
import { InboxInput, InboxInputList } from '../../components';
import { URL } from '../../static/server';
import axios from 'axios';

interface Props {}

interface IInputs {
  title: string;
  subTitle: string;
  until: string;
}

const InboxInputListContainer: React.FC<Props> = () => {
  const [inputs, setInputs] = useState([]);

  const inputList: React.ReactElement[] = useMemo(() => inputs.map((input: IInputs, i) => {
    return (<InboxInput
      key={i}
      title={input.title}
      subTitle={input.subTitle}
      until={input.until}
    />);
  },
  ), [inputs]);

  useEffect(() => {
    axios.get(URL).then((data) => {
      setInputs(data.data.inbox);
    })
  }, []);

  return <InboxInputList inputList={inputList} />;
};

export default InboxInputListContainer;
