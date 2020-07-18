import styled, { css } from 'styled-components';

interface ISkeletonTheme {
  baseColor?: string;
  highlightColor?: string;
}

interface ISkeletonBone {
  side?: string;
  width?: string;
  height?: string;
}

export const MovieWrapStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const SSkeletonTheme = styled.div`
  margin: 24px auto 8px;
  * {
    ${({ baseColor = '#F0F0F0', highlightColor = '#F8F8F8' }: ISkeletonTheme) => css`
      background: linear-gradient(-90deg, ${baseColor} 0%, ${highlightColor} 50%, ${baseColor} 100%);
    `}
  }
`;

export const SSkeletonBone = styled.div`
  display: inline-block;
  width: ${({ side, width = '0' }: ISkeletonBone) => side ? side : width};
  height: ${({ side, height = '0' }: ISkeletonBone) => side ? side : height};
  border-radius: 4px;
  background-size: 400% 400%;
  animation: bone 1.2s ease-in-out infinite;
  @keyframes bone {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;
