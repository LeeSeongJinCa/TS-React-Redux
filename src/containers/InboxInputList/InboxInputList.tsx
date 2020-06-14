import React, { useMemo } from 'react';
import { InboxInput, InboxInputList } from '../../components';

interface Props {

}

interface IInputs {
  title: string;
  subTitle: string;
  until: string;
}

const InboxInputListContainer: React.FC<Props> = () => {
  const inputs: IInputs[] = [
    {
      title: 'title',
      subTitle: 'subTitle',
      until: 'until',
    }, {
      title: 'title',
      subTitle: 'subTitle',
      until: 'until',
    }, {
      title: 'title',
      subTitle: 'subTitle',
      until: 'until',
    }, {
      title: 'title',
      subTitle: 'subTitle',
      until: 'until',
    }, {
      title: 'title',
      subTitle: 'subTitle',
      until: 'until',
    },
  ];

  const inputList: React.ReactElement[] = useMemo(() => inputs.map((input, i) => {
    return (<InboxInput
      key={i}
      title={input.title}
      subTitle={input.subTitle}
      until={input.until}
    />);
  },
  ), []);

  return <InboxInputList inputList={inputList} />;
};

export default InboxInputListContainer;
