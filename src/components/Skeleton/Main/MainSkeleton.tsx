import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const MainSkeleton = () => {
  return (
    <SkeletonTheme color="#202020" highlightColor="#444">
      <p>
        <Skeleton count={3} />
      </p>
    </SkeletonTheme>
  );
};

export default MainSkeleton;
