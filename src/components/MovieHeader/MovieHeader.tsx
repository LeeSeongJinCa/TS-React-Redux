import React, { useRef } from 'react';

import * as S from './style';
import { searchSvg, undoSvg } from '../../assets';
import { useHistory } from 'react-router-dom';

interface Props {
  isFocus: any;
  handleFocus: any;
  handleNotFocus: any;
  handleChangeSelect: any;
}

const MovieHeader: React.FC<Props> = ({
  isFocus,
  handleFocus,
  handleNotFocus,
  handleChangeSelect,
}) => {
  const history = useHistory();
  const searchRef = useRef(null);

  const handleFocusWithRef = () => {
    handleFocus(searchRef);
  };
  const goMain = () => {
    history.push('/');
  };

  return (
    <S.MovieHeaderWrap>
      <S.MovieHeaderUndo onClick={goMain} src={undoSvg} alt="undo" title="undo" />
      <S.MovieHeaderSelector onChange={handleChangeSelect} name="genres">
        {['all', 'movie', 'genre'].map((option: string) => (
          <S.MovieHeaderOption key={option} value={option}>
            {option}
          </S.MovieHeaderOption>
        ))}
      </S.MovieHeaderSelector>
      <S.MovieHeaderSearchWrap>
        <S.MovieHeaderSearchImg
          src={searchSvg}
          onClick={handleFocusWithRef}
          alt="search"
          title="search"
        />
        <S.MovieHeaderSearchInput
          type="text"
          onBlur={handleNotFocus}
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
