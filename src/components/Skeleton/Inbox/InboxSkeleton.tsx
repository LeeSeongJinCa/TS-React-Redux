import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

interface Props {
  count: number;
}

const InboxSkeleton: React.FC<Props> = ({
  count = 1,
}) => {
  const wrapStyle = {
    display: 'flex',
    height: '80px',
    padding: '16px 8px',
  };
  const imgStyle: React.CSSProperties = {
    float: 'left',
  };
  const infoStyle = {
    display: 'inline-block',
    width: '420px',
    marginLeft: '10px',
  };
  const sideWrapStyle = {
    flex: '1',
    display: 'block',
    width: '100px',
    textAlign: 'right' as 'right',
  };
  const untilStyle = {
    width: '85%',
  };
  const deleteStyle = {
    lineHeight: 'normal',
  };
  const skull = () => Array(count).fill(0).map((_, i) => (
    <SkeletonTheme key={i} color="#efefef" highlightColor="#eaeaea">
      <div style={wrapStyle}>
        <Skeleton circle={true} width={45} height={45} style={imgStyle} />
        <div style={infoStyle}>
          <Skeleton />
          <Skeleton />
        </div>
        <div style={sideWrapStyle}>
          <Skeleton style={untilStyle} />
          <Skeleton circle={true} width={24} height={24} style={deleteStyle} />
        </div>
      </div>
    </SkeletonTheme>
  ),
  );

  return (
    <>{skull()}</>
  );
};

export default InboxSkeleton;
