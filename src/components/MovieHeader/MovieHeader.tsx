import React, { useState, useRef } from 'react';

import * as S from './style';
import { searchSvg } from '../../assets';

interface Props { }

const MovieHeader: React.FC<Props> = () => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const searchRef = useRef(null);

  const onClickFocus = () => {
    setIsFocus(true);
    searchRef.current.focus();
  };
  const handleFocus = () => {
    setIsFocus(true);
  };
  const handleBlur = () => {
    setIsFocus(false);
  };

  return (
    <S.MovieHeaderWrap>
      <S.MovieHeaderSelector name="genres">
        <S.MovieHeaderOption value="all">All</S.MovieHeaderOption>
        <S.MovieHeaderOption value="action">Action</S.MovieHeaderOption>
        <S.MovieHeaderOption value="adventure">Adventure</S.MovieHeaderOption>
        <S.MovieHeaderOption value="animation">Animation</S.MovieHeaderOption>
      </S.MovieHeaderSelector>
      <S.MovieHeaderSearchWrap>
        <S.MovieHeaderSearchImg
          src={searchSvg}
          onClick={onClickFocus}
          alt="search"
          title="search"
        />
        <S.MovieHeaderSearchInput
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Search"
          name="Search"
          ref={searchRef}
          isFocus={isFocus}
        />
      </S.MovieHeaderSearchWrap>
    </S.MovieHeaderWrap>
  );
};

export default MovieHeader;
