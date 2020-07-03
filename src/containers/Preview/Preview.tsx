import React from 'react';

import { Preview } from '../../components';
import { GetIInput } from '../../static/todoForm';

interface Props {
  inputs: GetIInput[];
}

const PreviewContainer: React.FC<Props> = ({
  inputs,
}) => {

  return <Preview inputs={inputs} />;
};

export default PreviewContainer;
