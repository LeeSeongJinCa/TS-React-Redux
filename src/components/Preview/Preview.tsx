import React from 'react';
import PreviewMain from '../PreviewMain/PreviewMain';
import PreviewAside from '../PreviewAside/PreviewAside';

interface Props {

}

const Preview: React.FC<Props> = () => {
  return (
    <>
      <PreviewMain />
      <PreviewAside />
    </>
  );
};

export default Preview;
