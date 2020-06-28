import React, { ReactElement } from 'react';
import { InboxInputList } from '../../components';

interface Props {
  inputList: ReactElement[];
}

const InboxInputListContainer: React.FC<Props> = ({ inputList }) => {
  return <InboxInputList inputList={inputList} />;
};

export default InboxInputListContainer;
