import React, { useMemo } from 'react';

import { MovieWrapStyle, SSkeletonTheme, SSkeletonBone } from '../style';

interface Props { }

const MovieSkeleton: React.FC<Props> = () => {
  const memorizedSkull = useMemo(() => Array(8).fill(0).map((_, i) => (
    <SSkeletonTheme key={i}>
      <SSkeletonBone side={'140px'} />
      <SSkeletonBone width={'100%'} height={'20px'} />
      <SSkeletonBone width={'100%'} height={'20px'} />
    </SSkeletonTheme>
  )), []);

  return (
    <MovieWrapStyle>{memorizedSkull}</MovieWrapStyle>
  );
};

export default MovieSkeleton;
